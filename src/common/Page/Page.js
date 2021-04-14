import './Page.scss';

import {Loader} from "../Loader/Loader";
import {usePromiseTracker} from "react-promise-tracker";

export function Page({children}) {

    const {promiseInProgress} = usePromiseTracker();

    return <div className='page'>
        <div className="page__inside">
            {promiseInProgress ? <Loader /> : children}
        </div>
    </div>;
}