import React from 'react';
import { FaFileArrowDown } from 'react-icons/fa6';

function CvBtn() {
  const handleDownload = () => {
    const cvUrl = '/documents/Samuel-resume.pdf';
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

  return (
    <div className='cv_btn '>
      <button className='btn_tooltip' onClick={handleDownload}>
        <FaFileArrowDown />
      </button>
    </div>
  );
}

export default CvBtn;
