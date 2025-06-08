import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../view/layouts/AppLayout";
import { StartPage } from "../view/pages/StartPage";
import { FirstPage } from "../view/pages/FirstPage";
import {CheckIdProvider} from "../common/providers/CheckIdProvider";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <CheckIdProvider> <StartPage /> </CheckIdProvider>
            },
            {
                path: '/1',
                element: <CheckIdProvider> <FirstPage /> </CheckIdProvider>
            },
        ]
    }
])
