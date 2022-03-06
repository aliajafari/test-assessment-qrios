import { useCallback, useState } from 'react';
import styles from './App.module.scss'
import GalleryCard from './components/GalleryCard';
import Modal from './components/Modal';
import Portal from './components/Portal';
import data from './data.json';

function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleOnClickImage = useCallback((id) => {
    setSelectedImage(data.find(item => item.id === id))
  }, [])

  const handleOnClickClosePortal = () => {
    setSelectedImage(null);
  }
  
  return (
    <>
      <div className={styles.container}>
        {data.map((item) => {
          return <GalleryCard {...item} key={item.id} onClickImage={handleOnClickImage} />
        })}
      </div>
      {selectedImage &&
        <Portal>
          <Modal {...selectedImage} onClickClose={handleOnClickClosePortal} />
        </Portal>
      }

    </>
  );
}

export default App;
