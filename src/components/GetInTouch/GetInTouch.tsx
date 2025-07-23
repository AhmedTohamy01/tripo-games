import styled from 'styled-components'
import { isEmailValid } from '@/utils/helpers'
import { Button, Form, Input, notification } from 'antd'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/*---> Component <---*/
function GetInTouch() {
  const ref = useRef(null)
  const emailFormRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [contactForm] = Form.useForm()
  const [emailForm] = Form.useForm()
  const [api, contextHolder] = notification.useNotification()

  async function handleSuccessfulSave(values: any): Promise<void> {
    console.log('Success values:', values)

    if (!isEmailValid(values.email)) {
      api['error']({ message: 'Invalid email' })
      return
    }
  }

  function handleFailedSave(errorInfo: any): void {
    console.log('Failed:', errorInfo)
    api['warning']({ message: 'Please fill all required fields' })
  }

  return (
    <MainWrapper>
      {contextHolder}
      <FormWrapper
        ref={ref}
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <FormTitle>Get in Touch</FormTitle>
        <FormSubTitle>
          I'm a paragraph. Click here to add your own text and edit me.
        </FormSubTitle>
        <Form
          form={contactForm}
          id={'contactForm'}
          onFinish={handleSuccessfulSave}
          onFinishFailed={handleFailedSave}
          autoComplete='off'
        >
          <RowWrapper>
            <FieldWrapper>
              <Label>
                First Name <RedStar>*</RedStar>
              </Label>
              <InputWrapper>
                <Form.Item
                  name='name'
                  rules={[{ required: true, message: '' }]}
                >
                  <StyledInput allowClear />
                </Form.Item>
              </InputWrapper>
            </FieldWrapper>
            <FieldWrapper>
              <Label>
                Last Name <RedStar>*</RedStar>
              </Label>
              <InputWrapper>
                <Form.Item
                  name='company'
                  rules={[{ required: true, message: '' }]}
                >
                  <StyledInput allowClear />
                </Form.Item>
              </InputWrapper>
            </FieldWrapper>
          </RowWrapper>
          <RowWrapper>
            <SingleFieldWrapper>
              <Label>
                Email <RedStar>*</RedStar>
              </Label>
              <InputWrapper>
                <Form.Item
                  name='email'
                  rules={[{ required: true, message: '' }]}
                >
                  <StyledInput allowClear />
                </Form.Item>
              </InputWrapper>
            </SingleFieldWrapper>
          </RowWrapper>
          <RowWrapper>
            <TextAreaWrapper>
              <Label>
                Message <RedStar>*</RedStar>
              </Label>
              <InputWrapper>
                <Form.Item
                  name='message'
                  rules={[{ required: true, message: '' }]}
                >
                  <StyledTextArea />
                </Form.Item>
              </InputWrapper>
            </TextAreaWrapper>
          </RowWrapper>
          <ButtonWrapper>
            <SubmitButton type='primary' htmlType='submit'>
              Submit
            </SubmitButton>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
      <EmailFormWrapper
        ref={emailFormRef}
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <EmailFormTitle>Subscribe to Our Newsletter</EmailFormTitle>
        <Form
          form={emailForm}
          id={'emailForm'}
          onFinish={handleSuccessfulSave}
          onFinishFailed={handleFailedSave}
          autoComplete='off'
        >
          <SingleFieldWrapper>
            <EmailLabel>Email *</EmailLabel>
            <InputWrapper>
              <Form.Item name='email' rules={[{ required: true, message: '' }]}>
                <StyledInput allowClear />
              </Form.Item>
            </InputWrapper>
          </SingleFieldWrapper>
          <JoinButton type='primary' htmlType='submit'>
            Join
          </JoinButton>
        </Form>
      </EmailFormWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  position: relative;
  background-image: url('./images/newsletter-background.png');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  padding: 0 100px;

  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 1100px) {
    padding: 100px 50px;
    height: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 100px 15px;
  }
`

const FormWrapper = styled.div`
  /* border: 1px solid red; */
  width: 440px;
  background: white;
  padding: 20px;
  border-radius: 20px;
  margin-top: -200px;
  height: fit-content;

  @media (max-width: 1100px) {
    margin-top: 0px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

const EmailFormWrapper = styled.div`
  /* border: 1px solid yellow; */
  width: 390px;
  height: 260px;
  background-color: #da392b;
  color: white;
  padding: 24px;
  border-radius: 20px;
  margin-top: 160px;

  @media (max-width: 1100px) {
    margin-top: 0px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`

const FormTitle = styled.div`
  /* border: 1px solid red; */
  font-size: 32px;
  font-weight: 700;
  color: #272443;
  margin-bottom: 20px;
`

const EmailFormTitle = styled.div`
  /* border: 1px solid red; */
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 21px;
  }
`

const FormSubTitle = styled.div`
  /* border: 1px solid red; */
  font-size: 18px;
  margin-bottom: 30px;
`

const RowWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  gap: 20px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    display: block;
  }
`

const SingleFieldWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
`

const FieldWrapper = styled.div`
  /* border: 1px solid red; */
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`

const TextAreaWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  margin-bottom: 30px;
`

const Label = styled.div`
  /* border: 1px solid red; */
  font-size: 16px;
  font-weight: 400;
  color: #101010;
  margin-bottom: 5px;
`

const EmailLabel = styled.div`
  /* border: 1px solid yellow; */
  font-size: 16px;
  font-weight: 400;
  color: white;
  margin-bottom: 5px;
`

const InputWrapper = styled.div`
  /* border: 1px solid blue; */
  height: 43px;
`

const StyledInput = styled(Input)`
  height: 43px;
  font-size: 16px;
  font-weight: 400;
`

const StyledTextArea = styled(Input.TextArea)`
  height: 120px !important;
  resize: none !important;
  font-size: 16px;
  font-weight: 400;
`

const ButtonWrapper = styled.div`
  /* border: 1px solid yellow; */
  margin-top: 80px;
`

const RedStar = styled.span`
  /* border: 1px solid yellow; */
  color: red;
`

const SubmitButton = styled(Button)`
  border-radius: 10px !important;
  background-color: #272443 !important;
  color: #ffffff !important;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  width: 100%;
  height: 44px;
  margin-top: 10px;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    background-color: #da392b !important;
    color: #ffffff !important;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

const JoinButton = styled(Button)`
  border-radius: 10px !important;
  background-color: #fcff72 !important;
  color: #272443 !important;
  border: 1px solid #fcff72 !important;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  width: 100%;
  height: 44px;
  margin-top: 15px;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    background: #f6f4f0 !important;
    border: 1px solid #f6f4f0 !important;
    color: #272443 !important;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

export default GetInTouch
