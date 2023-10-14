'use client';

import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="a parrot image"
        />
      )}
      <CldUploadWidget
        uploadPreset="j5p1fypq"
        options={{ sources: ['local'], multiple: false, maxFiles: 5 }}
        onUpload={(result, widget) => {
          if (result.event !== 'success') return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
