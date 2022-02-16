import React, { useState } from "react";
import "./Survey.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";



const Survey = () => {
  const [SurveyState, setSurveyState] = useState({
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:""
  });
  
  const { userId } = useSelector(state => state.userReducer)
  let navigate = useNavigate();
  const surveyHandleChange = (e) => {
    setSurveyState({ ...SurveyState, [e.target.name]: e.target.value });
  };
  
  
  let handleSubmit = () => {
    let data = { 
      answer1: SurveyState['answer1'],
      answer2: SurveyState['answer2'],
      answer3: SurveyState['answer3'],
      answer4: SurveyState['answer4'],
      "user": userId
    }
    
    let url = "http://localhost:8000/api/survey/";
    const header = {
      headers: {
        "content-type": "application/json"
      }
    }
    try {
      axios.post(url, data, header)
        .then(response => {
          navigate("/")
          navigate("/survey")
        })
        .catch((error) => {
          console.log(error);
        });
    }
    catch (err) {
      console.error(`Error received from survey axios.post: ${JSON.stringify(err)}`);
    }



  };

  return (
    <>
      <article className="survey-page">
        <header className="survey-page-header">
          <div className="title-box">
            <h1 id="title">Customer Satisfaction Survey </h1>
          </div>

          <div className="header-box"></div>
        </header>

        {userId?
        
        <><p id="description">
          {" "}
          We need your answers to imporve our service quality
        </p>
        <section className="survey-page-body">
              <form id="survey-form" name="surveyForm" action method="post">
                <fieldset className="question-fieldset">
                  <div className="left-tab">
                    <h4 className="question-title">
                      <label for="is_satisfied">
                        1. How much money do you have?
                      </label>
                    </h4>
                  </div>

                  <ul className="right-tab">
                    <div className="input-holder-radio">
                      <input
                        name="answer1" type="radio" value="$0-$500"
                        onChange={surveyHandleChange}
                      />
                      <label>$0 - $500</label>
                    </div>
                    <div className="input-holder-radio">
                      <input
                        name="answer1" type="radio" value="$500-$1000"
                        onChange={surveyHandleChange}
                      />
                      <label>$500 - $1000</label>
                    </div>
                    <div className="input-holder-radio">
                      <input
                        name="answer1" type="radio" value="$1000-$1500"
                        onChange={surveyHandleChange}
                      />

                      <label>$1000 - $1500</label>
                    </div>
                    <div className="input-holder-radio">
                      <input
                        name="answer1" type="radio" value="$1500-$2000"
                        onChange={surveyHandleChange}
                      />

                      <label>$1500 - $2000</label>
                    </div>

                    <div className="input-holder-radio">
                      <input
                        name="answer1" type="radio" value="$2000-$2500"
                        onChange={surveyHandleChange}
                      />

                      <label for="radioS5">$2000 - $2500</label>
                    </div>
                  </ul>
                </fieldset>

                <fieldset className="question-fieldset">
                  <div className="left-tab">
                    <h4 className="question-title">
                      <label for="is_satisfied">
                        2. What return did you make in the market last year?
                      </label>
                    </h4>
                  </div>

                  <ul className="right-tab">
                    <div className="input-holder-radio">
                      <input
                        name="answer2" type="radio" value="Very satisfied"
                        onChange={surveyHandleChange}
                      />
                      <label>Very satisfied</label>
                    </div>
                    <div className="input-holder-radio">
                      <input
                        name="answer2" type="radio" value="Somewhat satisfied"
                        onChange={surveyHandleChange}
                      />
                      <label>Somewhat satisfied</label>
                    </div>
                    <div className="input-holder-radio">
                      <input
                        name="answer2" type="radio" value="Nether satisfied nor dissatisfied"
                        onChange={surveyHandleChange}
                      />

                      <label>Nether satisfied nor dissatisfied</label>
                    </div>
                    <div className="input-holder-radio">
                      <input
                        name="answer2" type="radio" value="Somewhat dissatisfied"
                        onChange={surveyHandleChange}
                      />

                      <label>Somewhat dissatisfied</label>
                    </div>

                    <div className="input-holder-radio">
                      <input
                        name="answer2" type="radio" value="Very disstatisfied"
                        onChange={surveyHandleChange}
                      />
                      <label for="radioS5">Very disstatisfied</label>
                    </div>
                  </ul>
                </fieldset>

                <fieldset className="question-fieldset">
                  <div className="left-tab">
                    <h4 className="question-title">
                      <label for="is_satisfied">
                        3. What do you think is a good return?
                      </label>
                    </h4>
                  </div>

                  <ul className="right-tab">
                    <div className="input-holder-radio">
                      <input
                        name="answer3" type="radio" value="Very satisfied"
                        onChange={surveyHandleChange}
                      />
                      <label>Very satisfied</label>
                    </div>
                    <div className="input-holder-radio">
                      <input
                        name="answer3" type="radio" value="Somewhat satisfied"
                        onChange={surveyHandleChange}
                      />
                      <label>Somewhat satisfied</label>
                    </div>
                    <div className="input-holder-radio">
                      <input
                        name="answer3" type="radio" value="Nether satisfied nor dissatisfied"
                        onChange={surveyHandleChange}
                      />

                      <label>Nether satisfied nor dissatisfied</label>
                    </div>
                    <div className="input-holder-radio">
                      <input
                        name="answer3" type="radio" value="Somewhat disstatisfied"
                        onChange={surveyHandleChange}
                      />

                      <label>Somewhat dissatisfied</label>
                    </div>

                    <div className="input-holder-radio">
                      <input
                        name="answer3" type="radio" value="Very disstatisfied"
                        onChange={surveyHandleChange}
                      />

                      <label for="radioS5">Very disstatisfied</label>
                    </div>
                  </ul>
                </fieldset>

                <fieldset className="question-fieldset">
                  <div className="left-tab">
                    <h4 className="question-title">
                      <label for="is_satisfied">
                        4. What percent return would you lend us money on?
                      </label>
                    </h4>
                  </div>

                  <ul className="right-tab">
                    <div className="input-holder-radio">
                      <input
                        name="answer4" type="radio" value="100%"
                        onChange={surveyHandleChange}
                      />
                      <label>100%</label>
                    </div>
                    <div className="input-holder-radio">
                      <input
                        name="answer4" type="radio" value="80%"
                        onChange={surveyHandleChange}
                      />
                      <label>80%</label>
                    </div>
                    <div className="input-holder-radio">
                      <input
                        name="answer4" type="radio" value="60%"
                        onChange={surveyHandleChange}
                      />

                      <label>60%</label>
                    </div>
                    <div className="input-holder-radio">
                      <input
                        name="answer4" type="radio" value="40%"
                        onChange={surveyHandleChange}
                      />

                      <label>40%</label>
                    </div>

                    <div className="input-holder-radio">
                      <input
                        name="answer4" type="radio" value="20%"
                        onChange={surveyHandleChange}
                      />

                      <label for="radioS5">20%</label>
                    </div>
                  </ul>
                </fieldset>

                <div className="center-row">
                  <Button
                    id="submit"
                    className="submit-btn"
                    onClick={handleSubmit}>
                    Done
                  </Button>
                </div>
              </form>
              
            </section></>
        
        :null}
        
      </article>
    </>
  );
};

export default Survey;
