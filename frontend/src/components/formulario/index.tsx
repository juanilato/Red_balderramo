import React, { createContext, useState, useEffect  } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from './styles.module.scss';
import { useRouter } from "next/navigation";

import { Input, SubmitButtom } from "./components";

type FormValues = Record<string, string>;

interface FormContextType {
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

interface FormProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export function Form({ title, children, description }: FormProps) {
    const { data: session } = useSession();
    const [formValues, setFormValues] = useState<FormValues>({});
    const router = useRouter()
 
    useEffect(() => {
        if (session) {
          router.push("/dashboard"); 
        }
      }, [session, router]); 

    const handleLoginSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        signIn("credentials", {
            redirect: false,
            username: formValues.username,
            password: formValues.password,
        }).then((response) => {
            if (!response?.error) {
                console.log("Login successful!");
                router.push("/dashboard");
            } else {
                console.log("Login failed:", response.error);
            }
        });
    };

    return (
        <FormContext.Provider value={{ formValues, setFormValues }}>
            <div className={styles.form}>
                <div className={styles.descriptionContainer}>
                    <h2>{title}</h2>
                    {description && <p>{description}</p>}
                </div>
                    <form onSubmit={handleLoginSubmit}>
                        {children}
                    </form>
            </div>
        </FormContext.Provider>
    );
}

Form.Input = Input;
Form.SubmitButtom = SubmitButtom;
