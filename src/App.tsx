import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CreateTrip } from './pages/CreateTrip/CreateTrip';
import { TripDetails } from './pages/TripDetails/TripDefails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <CreateTrip />,
    },
    {
        path: '/trips/:tripId',
        element: <TripDetails />,
    },
]);

export function App() {
    return <RouterProvider router={router} />;
}
