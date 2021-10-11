import useLoginForm from '../../hooks/useLoginForm'
import {Fragment} from 'react' 
import styled  from 'styled-components'
import { FormControl, Button, Grid, CircularProgress } from '@material-ui/core'

export const TextInput= styled.input`
  &::placeholder {
    font-weight: 500;
    letter-spacing: 1px;
    font-size:16px;
  }
  border:none;
  border-radius:5px;
  outline:transparent;
  border: 2px solid #171717;
  margin-bottom:15px;
  width:100%;
  padding: 12px 15px;
  `;

export function UserPasswordInput({register,errors,placeholder,name = 'userPassword'}){
  
  return(
    <Fragment>
      <TextInput
        placeholder={placeholder}
        type='password'
        name ={name}
        data-testid='passwordInput'
        autocomplete={false}
        ref={register({
          minLength: {
            value: 5,
          } 
        })}
        style={{ borderColor: errors[name] && "#bf0000" }}
      />
    </Fragment>
    );
  }
  
  export function UserEmailInput({register,errors}){
    
    return(
      <Fragment>
        <TextInput 
          type='email'
          placeholder='Your email...'
          name="userEmail"
          data-testid='emailInput'
          ref={register({
            pattern:{
              value:/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
              message:"*Email not valid"
            }
          })}
          style={{ borderColor: errors.userEmail && "#bf0000" }  }
        />
      </Fragment>
      );
    }
    
    
    
    
    export const Form = styled.form`
      width:90%;
      margin-left: -10px;
      padding-bottom:25px;
      display:flex;
      margin:0 auto;
      flex-flow:column;
      align-items:center;
      @media screen and  (max-width:500px){
        width: 90%;
        & > input {
          width: 95%;
          
        }
      }`; 
    
    export default function SinginForm(){
      const {register, handleSubmit, errors, onSubmit, isFormLoading} =  useLoginForm()
      return(
        <Grid container justify='center'>
          <Grid item>
            <FormControl>
            <Form onSubmit={handleSubmit(onSubmit)} style={{padding:'10px'}}>
              <UserEmailInput  errors={errors} register={register} name="userEmail" />
              <UserPasswordInput name="userPassword" errors={errors} register={register}/>
              <Button type="submit" variant='outlined'>Login</Button>
              {isFormLoading && <CircularProgress />}
            </Form>
            </FormControl>
          </Grid>
        </Grid>
        );
      }