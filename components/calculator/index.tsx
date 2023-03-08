import styles from './index.module.css';
import React, { useState } from 'react'


  type CalculatorProps = {
    content: any;
    userName: string;
    setUserName: any;
  };
  
  const Calculator: React.FunctionComponent<CalculatorProps> = (props) => {
    const { content, userName, setUserName } = props;

  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [bmiOldMetric, setBmiOldMetric] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [gender, setGender] = useState(0);

  const handleChange = (e: any) => {
    setUserName(e.target.value);
  };

  const handleFormReset = () => {
    setMessage('');
    setError('');
    setWeight(0);
    setHeight(0);
  }

  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    if (weight == 0 || height == 0) {
      setError(content.error)
    } else {
      // TODO: and different calculation for male/female
      let bmi = (weight * 1.3 / (Math.pow(height / 100, 2.5)));
      setBmi(bmi.toFixed(1));

      let bmiOldMetric = (weight / (Math.pow(height / 100, 2)));
      setBmiOldMetric(bmiOldMetric.toFixed(1));

      // Logic for message
      /* https://www.meinrechner.net/gesundheit/bmi-rechner/neuer-bmi-rechner
        Krankhaft untergewichtig	0 – 14,9
        Deutlich untergewichtig	15 – 17,9
        Leicht untergewichtig	18 – 18,9
        Normalgewicht	19 – 24,9
        Leicht übergewichtig	25,0 – 29,9
        Deutlich übergewichtig	30,0 – 34,9
        Stark fettleibig	35,0 – 39,9
        Krankhaft übergewichtig	40,0 oder mehr
        */

      if (bmi < 14.9) {
        setMessage(content.resultUnder)
      } else if (bmi >= 19 && bmi < 24.9) {
        setMessage(content.resultNormal)
      } else {
        setMessage(content.resultOver)
      }

      setError('');
    }
  }

  const setMale = () => setGender(2);
  const setFemale = () => setGender(1);

  return (

    <div id={content.id} className={`${styles.container}  ${gender === 2 ? styles.male : ""} ${gender === 1 ? styles.female : ""}`}>
      <form onSubmit={handleSubmit} className={styles.calculator} onReset={handleFormReset}>
        <h2 className={styles.headline}>
          {content.title}
        </h2>

        {error &&
          <p className={styles.error}>{error}</p>
        }
        <div>
          <input type="radio" name="gender" value="2" id="male" onChange={setMale} />
          <label htmlFor="male">{content.labelMale}</label>
        </div>
        <div>
          <input type="radio" name="gender" value="1" id="female" onChange={setFemale} />
          <label htmlFor="female">{content.labelFemale}</label>
        </div>

        <div>
          <label htmlFor="weight" className={styles.label}>
            {content.labelWeight} <small>{content.labelWeightUnit}</small>
          </label>
          <input className={styles.input} name="weight" type="number" value={weight} onChange={(e) => setWeight(parseInt(e.target.value))} />
        </div>

        <div>
          <label htmlFor="height" className={styles.label}>
            {content.labelHeight} <small>{content.labelHeightUnit}</small>
          </label>
          <input className={styles.input} name="height" type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} />
        </div>

        <div>
          <p>
            {content.info}
          </p>
          <label htmlFor="male" className={styles.label}>{content.firstName}</label>
          <input autoComplete="given-name" className={styles.input} type="text" name="userName" id="userName" defaultValue={userName} onChange={handleChange} />
        </div>

        <div>
          <button type="submit" className={styles.btn}>{content.submit}</button>
          <button type="reset" className={`${styles.reset} ${styles.btn}`}>{content.reset}</button>
        </div>

        <div className={`${message === "" ? styles.hide : ""}`}>
          <h3>{content.result} {bmi}</h3>
          <p>{message}</p>
          <p>{content.oldMetric} {bmiOldMetric}</p>
        </div>
      </form>
    </div>

  );
}

export default Calculator;