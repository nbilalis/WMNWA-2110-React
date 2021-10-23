import ImageGallery from './components/ImageGallery';

import './App.scss';

const images1 = [...Array(10)].map((_, i) => `https://source.unsplash.com/random/600x400?sig=${i + 1}`);
const images2 = [...Array(5)].map((_, i) => `https://source.unsplash.com/random/600x400?sig=${i + 11}`);

const App = () => (
  <>
    <h1>Image Gallery Component</h1>
    <div className="galleries-container">
      <ImageGallery images={images1} />
      <ImageGallery images={images2} />
    </div>
  </>
);

export default App;
