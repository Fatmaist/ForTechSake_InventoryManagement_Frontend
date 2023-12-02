import React, { useState, useEffect, useRef } from 'react';

export default function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (data_barang?.image) {
      const file = new File([], data_barang.image, { type: 'image/*' });
      setSelectedImage(URL.createObjectURL(file));
      fileInputRef.current.value = '';
    }
  }, [data_barang]);

  function handleImageUpload(event) {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        required
        ref={fileInputRef}
        onChange={handleImageUpload}
      />
      {selectedImage && <img src={selectedImage} alt="Selected Image" />}
    </div>
  );
}
