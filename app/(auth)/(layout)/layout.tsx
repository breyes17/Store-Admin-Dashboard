import { ReactNode } from "react";

const LayoutAuth = ({children}:{children: ReactNode}) => {

    return (
        <main className="flex justify-center items-center min-h-screen relative">
            <div className="z-10">
                {children}
            </div>
            <svg viewBox="55 0 90 180" xmlns="http://www.w3.org/2000/svg" className="absolute -z-0" width={600} height={650}>
                <path fill="#BAE6FF" d="M42.8,-66.3C57.9,-56.9,74.3,-49.2,78.7,-36.8C83,-24.4,75.3,-7.3,71,9C66.8,25.4,66.1,41,58.1,50.4C50.1,59.8,34.7,63,20,66.8C5.2,70.5,-9.1,74.9,-21,71.5C-33,68,-42.7,56.7,-52.8,45.5C-62.9,34.3,-73.3,23.2,-78.4,9.3C-83.4,-4.5,-83,-21.1,-78,-37.1C-73,-53.1,-63.5,-68.5,-49.7,-78.5C-35.9,-88.6,-18,-93.2,-2.1,-90C13.8,-86.8,27.7,-75.7,42.8,-66.3Z" transform="translate(100 100)" />
            </svg>  
        </main>
    )
}

export default LayoutAuth;