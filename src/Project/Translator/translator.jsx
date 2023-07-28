import "./translator.css"
import Container from 'react-bootstrap/Container';
import {Row, Col, Form, FloatingLabel, Button} from "react-bootstrap"
import { useEffect, useState } from "react";
import axios from "axios"
function Translator () {
    // state for the first input
    const [input, setInput] = useState('');

    // state for the second input
    const [result, setResult]=useState('');

    // state for the second language option dropdown
    const [languageList, setLanguageList] = useState([]);

    // state for the first language option dropdown
    const [firstLanguageList, setFirstLanguageList] = useState([]);
    
    // function for the button
     const translateText = () =>{
        
        axios.get(`https://api.mymemory.translated.net/get?q=${input}&langpair=${firstLanguageList}|${languageList}`).then((response)=>{
            console.log(response.data.responseData.translatedText);
            setResult(response.data.responseData.translatedText);
           })
           .catch((err)=>{
            console.log(err.response); 
           });
     }

     
     
     useEffect(()=> {
        
      
     }, [])


    return(
        <>
        <Container>
         <Row>
              <Col>
                <div className="translator-header">
                    <h2>
                        CYNOSURE'S TRANSLATOR
                    </h2>
                </div>
              </Col>
         </Row>

         <Row>
            
            <div className="translator-body">
                <Col>
                <Form.Select className="mt-5 selectdrop" onChange={(e)=> setFirstLanguageList(e.target.value)}>
                    <option>Open this select menu</option>
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                     <option value="ar">Arabic</option>
                     <option value="be">Belarusian</option>
                     <option value="el">Greek</option>
                     <option value="es">Spanish</option>
                     <option value="fr">French</option>
                     <option value="ko">Korean</option>
                     <option value="it">Italian</option>
                     <option value="ga">Irish</option>
                     <option value="et">Estonian</option>
                     <option value="fi">Finnish</option>
                     <option value="pt">Portuguese</option>
                     <option value="pl">Polish</option>
                     <option value="nl">Dutch</option>
                     
                </Form.Select>
                </Col>
                <Col>
                <div className="mt-5">
                          
                    <FloatingLabel label="Type text to translate..">
                        <Form.Control
                        as="textarea"
                        placeholder="Type text to translate.."
                        style={{ height: '100px' }}
                        onChange={(e)=> setInput(e.target.value)}
                        />
                    </FloatingLabel>
                </div>
                </Col>
                    <Col>
                        <Form.Select className="mt-5 selectdrop" onChange={(e)=> setLanguageList(e.target.value)}>
                            <option>Open this select menu</option>
                            <option value="en">English</option>
                            <option value="hi">Hindi</option>
                            <option value="ar">Arabic</option>
                            <option value="be">Belarusian</option>
                            <option value="el">Greek</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="ko">Korean</option>
                            <option value="it">Italian</option>
                            <option value="ga">Irish</option>
                            <option value="et">Estonian</option>
                            <option value="fi">Finnish</option>
                            <option value="pt">Portuguese</option>
                            <option value="pl">Polish</option>
                            <option value="nl">Dutch</option>
                            
                        </Form.Select>
                    </Col>
                    <Col >
                <div  className="mt-5">
                    <Form>
                    <FloatingLabel label="Your result translation">
                        <Form.Control
                        as="textarea"
                        placeholder="Your result translation"
                        style={{ height: '100px' }}
                        value={result}
                        />
                    </FloatingLabel>
                    </Form>
                    </div>
                   </Col>
                   <div className="d-flex justify-content-center">
                   <Button className="mt-5" variant="primary" onClick={translateText}>Translate</Button>
                   </div>
            </div>
         </Row>
         </Container>
        </>
    )
}

export default Translator;