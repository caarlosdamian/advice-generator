import divider from "../images/pattern-divider-desktop.svg";
import icon from "../images/icon-dice.svg";
import { useQuery } from "react-query";

export const Card = () => {
  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    return res.json();
  };

  const { data, status ,refetch} = useQuery("advices", getAdvice);

  return (
    <div className="card__container">
      <h4 className="card__subtitle">{`ADVICE #${data?.slip?.id}`}</h4>
      {status === "loading" ? (
        <span className="card__advice"> Loading...</span>
      ) : status === "error" ? (
        "Retry"
      ) : (
        <p className="card__advice">
            {data?.slip?.advice}
        </p>
      )}
      <img src={divider} alt="divider" className="card__diveder" />
      <div className="card__footer-card" onClick={()=>refetch}>
        <img src={icon} alt="icon" className="card__diveder" onClick={()=>refetch} />
      </div>
    </div>
  );
};
