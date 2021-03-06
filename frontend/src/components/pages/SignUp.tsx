import React,{FC, useState, FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '../UI/Input';
import { Button } from '../UI/Button';
import { Message } from '../UI/Message';
import { signup,setError } from '../../store/actions/authActions';
import { RootState } from '../../store';

export const SignUp: FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
    }
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    dispatch(signup({ email, password, firstName }, () => setLoading(false)));
  }

  return (
    <div className="signup__cont">
    <section className="signup__cont__section">
      <div className="signup__cont__body">
        <h2 className="has-text-centered is-size-2 mb-3">Sign Up</h2>
        <form className="signup__cont__form" onSubmit={submitHandler}>
          {error && <Message type="danger" msg={error} />}
          <Input
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
            placeholder="First Name"
            label="First name"
            type="text"
          />
           <Input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email address"
            label="Email address"
            type="text"
          />
           <Input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
            label="Password"
            type="password"
          />
          <Button text={loading ? "Loading..." : "Sign Up"} className="btn" disabled={loading} />
        </form>
      </div>
      </section>
      </div>
    );
}