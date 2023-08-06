import React from "react";
import InstituteService from "../../firebase/services/Institute.service";

export default function Test() {
    const handleCreateInstitute = () => {
        console.log('testing');

        InstituteService.createInstitute({
            name: 'Test institute 1',
            address: 'Madagascar',
            pictureUrl: 'https://picsum.photos/id/237/200/300',
            contact: ['pro@andritiana.tech']
        }).then(() => {
            console.log('Success');
            alert('Success')
        }).catch((error) => {
            console.log('Error: ', error);
            alert('Fail')

        })
    }
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center">
                <button onClick={handleCreateInstitute} className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-700 text-white  transition-all text-sm">Test InstituteService.createInstitute</button>
            </div>
        </>
    );
}
