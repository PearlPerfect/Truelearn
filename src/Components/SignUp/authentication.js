
import Head from 'next/head';
import React, { useState } from 'react';
import{CssBaseline,CircularProgress }from '@mui/material'
import styles from './signup.module.css'
import { auth } from '@/services/_config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword,FacebookAuthProvider, GoogleAuthProvider,
  signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
import Image from 'next/image';


export default function Sign() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(''); 
    const [isLoading, setIsLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false); 
  
    const handleSignInOrSignUp = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        if (isSignUp) {
          await createUserWithEmailAndPassword(auth, name, email, password);
          router.push(`/dashboard?name=${encodeURIComponent(email)}`)
          console.log('Sign-up successful');
          setSuccessMessage('Congratulation!! Sign-up successful '); 
  
        } else {
          await signInWithEmailAndPassword(auth, name, email, password);
          router.push(`/dashboard?name=${encodeURIComponent(name)}`);
  
          console.log('Sign-in successful');
          setSuccessMessage('Congratulation!! Proceed to dashboard');
  
        }
      } catch (error) {
        if (error.code === 'invalid-login-credentials') {
          setError('**Invalid email or password**');
        }  else if (error.code === 'auth/email-already-in-use') {
          setError('**Email is already in use. Use a different email address.**');
        } 
        else if (error.code === 'auth/invalid-email') {
          setError('** Invalid email format. Enter a valid email address.** ');
        }
          else if(error.code === 'auth/invalid-login-credentials'){
            setError('** invalid login credentials** ');
          }
        else if(error.code =='auth/weak-password'){
          setError('** Weak-Password:Password should be at least 6 characters** ')
        }
        else if(error.code === 'auth/network-request-failed') {
          setError('** Network error. Check your internet connection.** ');
        }
        else {
          setError(error.message);
        }
      }
      finally {
        setIsLoading(false); 
      }
    };
    const handleGoogleSignIn = async () => {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        router.push(`/dashboard?name=${encodeURIComponent(user.email)}`);
        console.log('Google Sign-in successful');
        setSuccessMessage('Congratulation!! Sign-in with Google successful');
      } catch (error) {
        return error
        console.log(error)
      }
    };
    const handleFacebookSignIn = async () => {
      const provider = new FacebookAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        router.push(`/dashboard?name=${encodeURIComponent(user.email)}`);
      } catch (error) {
        return error
        console.log(error)
      }
    };
    
  
    return (
      <>
        <Head>
          <title>TrueLearn||Sign up</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      
      <section>
       < CssBaseline/>
{/* <div className={styles.logo}>
    <Image src={logo} alt='logo' className={styles.logoIcon}></Image>
        <p  className={styles.logoName}>HelpMeOut</p>
</div> */}
       <div  className={styles.SignUpcontainer}>
        <div className={styles.Signcontainer}>
             <div className={styles.Right}></div>
             <div className={styles.Left}>
        <h2 className={styles.FormTitle}>Log in or Sign up</h2>
        <p className={styles.FormDes}>Join others in the successful gaining and sharing of information with TrueLearn.</p>
        <div className={styles.serviceproviders}>
            <button className={styles.button} onClick={handleGoogleSignIn}>Continue with Google</button>
            <button className={styles.button} onClick={handleFacebookSignIn}>Continue with Facebook</button>
        </div>
        <p>or</p>
         <div className={styles.form}>
          {error&& <p className={styles.error}>{error}</p>}
          {successMessage && <p className={styles.success}>{successMessage}</p>}
          <form onSubmit={handleSignInOrSignUp}>
          <div className={styles.formGroup}>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                placeholder='Enter your email address'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
          <div className={styles.formGroup}>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                placeholder='Enter your Name'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
  
            <div className={styles.formGroup}>
              <label>Password:</label>
              <input
              
                type="password"
                value={password}
                placeholder='Enter Your Password'
                onChange={(e) => setPassword(e.target.value)}
                required
                
              />
             
            </div>
            <button type="submit" className={styles.submitButton}>
            {isLoading ? (
                  <CircularProgress size={20} color="inherit" /> 
                ) : (
                  isSignUp ? 'Sign Up' : 'Sign In'
                )}
            </button>
          </form>
          <p className={styles.options}>
            {isSignUp
              ? "Already have an account? "
              : "Don't have an account? "}
            <button className={styles.toggleButton}onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
        </div>
        </div>
        </div>
        </section>
      </>
    );
  }