import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main>
      <div>
        <h1>The page you are looking for could not be found 😢</h1>
        <button onClick={() => navigate(-1)}>&larr; Go back</button>
      </div>
    </main>
  );
}

export default PageNotFound;
