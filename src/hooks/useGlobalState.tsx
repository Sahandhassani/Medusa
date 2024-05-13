import create from 'zustand';

export type GlobalState = {
    errorOccured: {
        value : boolean;
        msg : string;
    };
    setErrorOccured: (value: boolean , msg: string) => void;
    showModal: boolean;
    setShowModal: (value: boolean) => void;
};

export const useGlobalState = create<GlobalState>((set) => ({
    errorOccured: {
        value : false,
        msg : ''
    },
    setErrorOccured: (value: boolean , msg: string) => {
        set(()=>({
            errorOccured: {
                value : value,  
                msg: msg
            },
        }));
    },
    showModal: false,
    setShowModal: (value: boolean) => {
        set(() => ({
            showModal: value,
        }));
    },
}));
