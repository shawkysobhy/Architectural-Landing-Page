import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
function App() {
	return (
		<>
			<Header />
			<div className='righRectangle'>
				<HeroSection />
				<FeatureSection />
			</div>
			<BlogSection />
			<Footer />
		</>
	);
}

export default App;
