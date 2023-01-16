import AppRouter from "./routes";
import Layout from "./components/Layout";


const App = () => {
    return (
        <Layout>
            <AppRouter/>
        </Layout>
    );
};

export default App;
