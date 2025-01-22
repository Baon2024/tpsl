




export default function EmptyContainer({modalBox, message, setMessage, subject, setSubject, setModalBox}) { 


    

    function modalBoxHandler() {
      
        if (modalBox) {
            setModalBox(false);
            console.log("modal box is:", modalBox);
        } else {
            setModalBox(true);
            console.log("modal box is:", modalBox);
        }
    }

    async function handleSubmit() {

        const dataToSend = {
            subject: subject,
            message: message
        }
        console.log("data to send is:", dataToSend);

        if (subject && message) {
            try {
                const response = await fetch("http://localhost:3000/api/sendEmail", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify( dataToSend ),
                });
                //const data = await response.json();
                console.log("response from function to send email data to backend:", response);
                if (response.ok === true) {
                    alert("message successfully sent");
                }
            } catch (error) {
                console.error(error);
                console.log("An error occurred, please try again later");
            }
        }
    }



    return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <button onClick={modalBoxHandler}>Contact Us</button>
          </div>
        </div>
        <div>
            {modalBox && (
            <>
              <label>subject</label>
              <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
              <label>message</label>
              <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
              <button type="button" onClick={handleSubmit}>post</button>
            </>
            )}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
)
}