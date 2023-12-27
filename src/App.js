import Header from './components/Header';
import ChatQuestion from './components/ChatQuestion';
import Footer from './components/Footer';

function App() {
    return (
        <div className='bg-dark text-light pt-5' style={{ height: '100vh' }}>
            <Header/>
            <ChatQuestion/>
            <Footer/>
        </div>
    );
}

export default App;
