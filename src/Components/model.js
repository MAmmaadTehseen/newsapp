import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { GoogleGenerativeAI } from "@google/generative-ai"

const App = ({ title }) => {


    const [response, setResponse] = useState()

    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const genai = new GoogleGenerativeAI("AIzaSyCF0hpVa2ab7n_eIYzg1Hu3a2_tUY0CBfc")
    const showLoading = async () => {
        setOpen(true);
        setLoading(true);

        // Simple loading mock. You should add cleanup logic in real world.
        await getData()
        setLoading(false);

    };
    function bold(text) {
        var bold = /\*\*(.*?)\*\*/gm;
        var html = text.replace(bold, '<strong>$1</strong>');
        return html;
    }

    async function getData() {
        const model = genai.getGenerativeModel({ model: "gemini-pro" })
        const prompt = `get more on this${title}`
        const result = await model.generateContent(prompt)
        const response1 = await result.response
        let text = response1.text();
        text = text.replace(/\n/g, "<br>")

        setResponse(bold(text))
        console.log(text)

    }
    return (
        <>
            <br />
            <Button type="primary" onClick={showLoading}>
                Get More Detail
            </Button>
            <Modal
                width={999}
                title={<h1>Response</h1>}
                footer={
                    <Button type="primary" onClick={showLoading}>
                        Enhance Response
                    </Button>
                }
                loading={loading}
                open={open}
                onCancel={() => setOpen(false)}
            >
                <p dangerouslySetInnerHTML={{ __html: response }}></p>

            </Modal>
        </>
    );
};
export default App;