//scssファイルを読み込む
import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    //scss
    //classesモジュールのcontainerクラスを読みこむ
    <div className={classes.container}>
      <p className={classes.title}> -CSS Modules - </p>
      <button className={classes.button}> FIGHT</button>
    </div>
  );
};
