import React, {
  createContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from "react";
import {
  auth as fauth, onAuthStateChanged
} from "../utils/firebase";

interface AppContextDefault {
	auth: boolean;
	setAuth: React.Dispatch<React.SetStateAction<boolean>>;
	qrCodeModalActive: boolean;
	setQrCodeModalActive: React.Dispatch<React.SetStateAction<boolean>>;
	selectedQrCode: any;
	setSelectedQrCode: React.Dispatch<React.SetStateAction<any>>;
	url: string;
	setUrl: React.Dispatch<React.SetStateAction<string>>;
}

const initialContext: AppContextDefault = {
  auth: false,
  url: "",
  qrCodeModalActive: false,
  selectedQrCode: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuth: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setQrCodeModalActive: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSelectedQrCode: () => {},
  setUrl: () => {},
};

const Context = createContext(initialContext);

interface Props {
  children: ReactNode;
}

const ContextProvider: FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [qrCodeModalActive, setQrCodeModalActive] = useState<boolean>(false);
  const [selectedQrCode, setSelectedQrCode] = useState<any>(null);

  useEffect(() => {
  	onAuthStateChanged(fauth, (user) => {
      if (user) {
        setAuth(true)
        console.log(user);
        
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        // ...
      } else {
        setAuth(false)
        // User is signed out
        // ...
      }
    });
  }, [onAuthStateChanged]);

  return (
    <Context.Provider
      value={{
        auth,
        setAuth,
        url,
        setUrl,
        qrCodeModalActive,
        selectedQrCode,
        setSelectedQrCode,
        setQrCodeModalActive,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
export { Context };
