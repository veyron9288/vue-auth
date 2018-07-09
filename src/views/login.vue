<style>
.loginSubmitBtn {
  width: 100%;
}
.loginForm {
  margin-top: 13%;
}
</style>

<template>
  <Row type="flex" justify="center" class-name="loginForm">
    <Col span="4">
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="Username">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="Password">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem>
              <Button class="loginSubmitBtn" type="primary" @click="handleSubmit('formInline')">Signin</Button>
          </FormItem>
      </Form>
    </Col>
  </Row>

</template>

<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
          setTimeout(() => {
            this.$router.push('/home');
          }, 500)
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  }
}
</script>