import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside
      className={`
      flex flex-col
      bg-gray-200 text-gray-700
      dark:bg-gray-900
    
    `}
    >
      <div
        className={`
        
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20`}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem icone={IconeCasa} texto="Início" url="/" />
        <MenuItem icone={IconeAjustes} texto="Ajustes" url="/ajustes" />
        <MenuItem icone={IconeSino} texto="Novidades" url="/notificacoes" />
      </ul>
      <ul>
        <MenuItem
          icone={IconeSair}
          texto="Sair"
          onClick={() => console.log("logout")}
          className={`text-red-600 dark:text-red-400
        hover:bg-red-400 hover:text-white
        dark:hover:text-white
        `}
        />
      </ul>
    </aside>
  );
}
