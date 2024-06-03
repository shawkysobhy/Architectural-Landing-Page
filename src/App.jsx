import {
	BlogSection,
	Footer,
	Header,
	HeroSection,
	FeatureSection,
} from './components';
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
