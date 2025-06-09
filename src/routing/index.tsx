import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../view/layouts/AppLayout";
import {CheckIdProvider} from "../common/providers/CheckIdProvider";
import { ProductGrid } from "../view/components/ProductGrid";
import { UnderConstraction } from "../view/components/UnderConstraction";
import { PageWrapper } from "../view/ui/PageWrapper/PageWrapper";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <CheckIdProvider>
                            <PageWrapper> 
                                <UnderConstraction title="Postcode"/>
                            </PageWrapper>
                        </CheckIdProvider>
            },
            {
                path: 'waste_type/',
                element: <CheckIdProvider> 
                            <PageWrapper>
                                <UnderConstraction title="Waste Type"/>
                            </PageWrapper>
                        </CheckIdProvider>
            },
            {
                path: 'select_skip/',
                element: <CheckIdProvider>
                            <PageWrapper>
                                <ProductGrid/>
                            </PageWrapper>
                        </CheckIdProvider>
            },
            {
                path: 'permit_check/',
                element: <CheckIdProvider> 
                            <PageWrapper>
                                <UnderConstraction title="Permit Check"/>
                            </PageWrapper>
                        </CheckIdProvider>
            },
            {
                path: 'choose_date/',
                element: <CheckIdProvider> 
                            <PageWrapper>
                                <UnderConstraction title="Choose Date"/>
                            </PageWrapper>
                        </CheckIdProvider>
            },
            {
                path: 'payment/',
                element: <CheckIdProvider> 
                            <PageWrapper>
                                <UnderConstraction title="Payment"/>
                            </PageWrapper>
                        </CheckIdProvider>
            },
        ]
    }
])
