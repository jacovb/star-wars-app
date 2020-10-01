import { useState, useEffect } from 'react';

export default function useImageFetch() {
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    async function fetchImage() {
      let res = await fetch('');
      let picture = await res.json();
      setImgUrl(picture);
    }
    fetchImage();
    console.log(imgUrl);
    // eslint-disable-next-line
  }, []);
}
