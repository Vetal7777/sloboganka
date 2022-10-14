import './App.css';
import './fonts/Open Sans /OpenSans-Regular.ttf';
import Header from "./components/header/header";
import {useAppSelector} from "./hooks/redux";
import LoaderSpinner from "./components/loader-spinner/loader-spinner";
import ErrorMessage from "./components/error-message/error-message";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import API from "./utils/API";
import {appSlice} from "./store/reducers/appSlice";

function App() {
    const dispatch = useDispatch();

    const showError = useAppSelector(({error}) => !!error);
    const isLoading = useAppSelector(({isLoading}) => !!isLoading);

    useEffect(() => {
        API
            .get('')
            .then(({data}) => dispatch(appSlice.actions.getSuccess(data)))
            .catch(({message}) => dispatch(appSlice.actions.failed(message)));
    },[])

    return (
        <>
            <div className={'container'}>
                {!(showError || isLoading) && (
                    <>
                        <Header/>
                    </>
                )}
                {isLoading && <LoaderSpinner/>}
                {showError && <ErrorMessage/>}
            </div>
        </>
    );
}

export default App;
