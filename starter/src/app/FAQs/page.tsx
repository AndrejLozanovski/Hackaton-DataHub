import MailButton from "@/components/MainButton";

interface FAQsInt {
  title: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  sub_title: string;
}

async function fetchData(): Promise<FAQsInt> {
  try {
    const response = await fetch("http://localhost:5002/FAQs");
    if (!response.ok) {
      throw new Error("Failed to fetch FAQs data");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching FAQs data:", error);
    throw error;
  }
}

export default async function FAQsPage() {
  const data = await fetchData();

  return (
    <div className="container-fluid">
      <div className="row bg-lightgray border-bottom border-radius shadow">
        <div className="col-12 py-3">
          <h1 className="mt-2">{data.title}</h1>
        </div>
        <div className="col-12 py-2">
          <h4 className="color-orange">{data.question1}?</h4>
          <p className="text-dark">{data.answer1}</p>
          <p className="text-dark">{data.answer1}</p>
        </div>
        <div className="col-12 py-2">
          <h4 className="color-orange">{data.question2}?</h4>
          <p className="text-dark">{data.answer2}</p>
          <p className="text-dark">{data.answer2}</p>
        </div>
        <div className="col-12 py-2">
          <h4 className="color-orange">{data.question3}?</h4>
          <p className="text-dark">{data.answer3}</p>
          <p className="text-dark">{data.answer3}</p>
        </div>
        <div className="col-12 py-2">
          <h4 className="color-orange">{data.question4}?</h4>
          <p className="text-dark">{data.answer4}</p>
          <p className="text-dark">{data.answer4}</p>
        </div>
      </div>
      <div className="row py-3 my-3">
        <div className="col-12 text-center">
          <h5>{data.sub_title}</h5>
          {<MailButton />}
        </div>
      </div>
    </div>
  );
}
