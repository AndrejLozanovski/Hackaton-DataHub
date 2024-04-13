'use client'

export default function MailButton() {
    const handleButtonClick = () => {
        const mailtoUrl = `mailto:info@datahub.com`;
        window.open(mailtoUrl);
    }; return <button className="btn btn-light border" type="submit" onClick={handleButtonClick} >Испратете ни е-пошта</button>
}