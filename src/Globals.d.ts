declare module "*.module.css";
declare module "*.module.scss";

interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: string
}

interface IInput extends React.HTMLProps<Input> {
    value: string | number | null,
}

interface INewContact {
    id?: number,
    name: string,
    surname: string,
    phone: string,
}

interface IContactFrontendField {
    id?: number,
    name: string,
    surname: string,
    phone: number,
}

interface IContactBackendField {
    id: number,
    name: string,
    surname: string,
    phone: number,
}

interface IContactData {
    id?: number,
    name: string,
    surname: string,
    phone: number,
}

interface IContact  {
    children?: string,
    data: IContactData,
}

interface IUserData {
    email: string,
    password: string,
    phone: number,
}

interface IModal {
    children: ReactNode,
}
