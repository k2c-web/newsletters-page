import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="bg-[#F4F4F4] p-4 mb-6 text-center">
      <div className="max-w-242.5 mx-auto">
        <h1 className="text-xl font-bold uppercase mb-2">Newsletters</h1>
        <p>
          Dans cette page, vous retrouvez l’ensemble des newsletters des Echos
          et des marques satellites. Ainsi, vous pouvez découvrir toutes nos
          newsletters selon vos centres d’intérêt et gérer plus facilement
          l’inscription à vos newsletters.
        </p>
      </div>
    </header>
  );
};
