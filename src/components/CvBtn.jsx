import React from 'react';
import { FaFileArrowDown, FaRegFilePdf } from 'react-icons/fa6';
import { SiReaddotcv } from 'react-icons/si';

function CvBtn() {
  const handleDownload = () => {
    const cvUrl = '../../public/documents/Samuel-resume.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'Samuel-resume.pdf'); // Ensure the file extension is correct
    link.setAttribute('type', 'application/pdf'); // Force browser to recognize as PDF
    link.download = 'Samuel-resume';
    console.log(link);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenResume = () => {
    const cvUrl = '/landing-page/Samuel-resume.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='cv_btn '>
      <button className='btn_tooltip' onClick={handleOpenResume}>
        <SiReaddotcv />
      </button>
    </div>
  );
}

export default CvBtn;
