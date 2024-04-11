import type { FC } from 'react';
import { memo } from 'react';

import resets from '../_resets.module.css';
import { Account_circleIcon } from './Account_circleIcon';
import { BcIcon } from './BcIcon';
import { BcIcon2 } from './BcIcon2';
import { BcIcon3 } from './BcIcon3';
import { BcIcon4 } from './BcIcon4';
import { CloseIcon } from './CloseIcon';
import { LockIcon } from './LockIcon';
import { MailIcon } from './MailIcon';
import classes from './Register.module.css';
import { VisibilityIcon } from './VisibilityIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:196 */
export const Register: FC<Props> = memo(function Register(props = {}) {
  return (
    <form className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.bc}>
        <BcIcon className={classes.icon} />
      </div>
      <div className={classes.bc2}>
        <BcIcon2 className={classes.icon2} />
      </div>
      <div className={classes.bc3}>
        <BcIcon3 className={classes.icon3} />
      </div>
      <div className={classes.visibility}>
        <VisibilityIcon className={classes.icon4} />
      </div>
      <label htmlFor="username" className={classes.nombreDeUsuario}>Nombre de usuario</label>
      <input type="text" id="username" name="username" className={classes.input} />
      <label htmlFor="email" className={classes.correo}>Correo</label>
      <input type="email" id="email" name="email" className={classes.input} />
      <label htmlFor="password" className={classes.contrasena}>Contraseña</label>
      <input type="password" id="password" name="password" className={classes.input} />
      <div className={classes.OlvidasteTuContrasena}>¿Olvidaste tu contraseña?</div>
      <div className={classes.oRegistrateCon}>o regístrate con</div>
      <div className={classes.bc4}>
        <BcIcon4 className={classes.icon5} />
      </div>
      <button type="submit" className={classes.label}>Registrarme</button>
      <div className={classes.line20}></div>
      <div className={classes.line22}></div>
      <div className={classes.line21}></div>
      <div className={classes.registrarme}>Registrarme</div>
      <div className={classes.close}>
        <CloseIcon className={classes.icon6} />
      </div>
      <div className={classes.account_circle}>
        <Account_circleIcon className={classes.icon7} />
      </div>
      <div className={classes.mail}>
        <MailIcon className={classes.icon8} />
      </div>
      <div className={classes.lock}>
        <LockIcon className={classes.icon9} />
      </div>
      <div className={classes.rectangle277}></div>
      <div className={classes.rectangle276}></div>
    </form>
  );
});
