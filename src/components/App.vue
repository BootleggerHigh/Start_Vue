<template>
    <div class="container">
        <form class="pt-3" @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="email">Почта</label>
                <input type="email" id="email" class="form-control" :class="{'is-invalid' : $v.email.$error}"
                       v-model="email" @blur="$v.email.$touch()">
                <div class="invalid-feedback" v-if="!$v.email.required">Заполните(почта обязательна).</div>
                <div class="invalid-feedback" v-if="!$v.email.uniqueEmail">По этой почте уже проходила регистрация</div>
                <div class="invalid-feedback" v-if="!$v.email.$error">Фэйк почта же.</div>

            </div>
            <div class="form-group">
                <label for="password">Пароль(минимум {{$v.password.$params.minLength.min}} символов)</label>
                <input type="password" id="password" class="form-control" :class="{'is-invalid' : $v.password.$error}"
                       v-model="password" @blur="$v.password.$touch()">
                <div class="invalid-feedback" v-if="!$v.password.required">Заполните(пароль обязателен).</div>
                <div class="invalid-feedback" v-if="!$v.password.minLength">Не хватает длины.</div>
            </div>
            <div class="form-group">
                <label for="repeat_password">Повторите пароль</label>
                <input type="password" id="repeat_password" class="form-control"
                       :class="{'is-invalid' : $v.repeatPassword.$error}" v-model="repeatPassword"
                       @blur="$v.repeatPassword.$touch()">
                <div class="invalid-feedback" v-if="!$v.repeatPassword.required">Заполните(повторить пароль нужно
                    обязательно).
                </div>
                <div class="invalid-feedback" v-if="!$v.repeatPassword.sameAsPassword">Не совпадает.</div>
            </div>
            <button class="btn btn-primary" type="submit"
            :disabled="$v.$invalid">Зарегистрироваться</button>
        </form>
    </div>
</template>

<script>
    const {required, email, sameAs, minLength} = require('vuelidate/lib/validators');
    export default {
        data() {
            return {
                email: '',
                password: '',
                repeatPassword: '',
            };
        },
        validations: {
            email: {
                required,
                email,
                uniqueEmail(newEmail) //Топовый асинхронный запрос на сервак,для валида почты
                {
                  return  '*******@gmail.com' !== newEmail;
                }
            },
            password: {
                required,
                minLength: minLength(6),
            },
            repeatPassword: {
                required,
                sameAsPassword: sameAs('password'),
            },
        },
        methods:{
            onSubmit()
            {
                console.log('Ну я типа готов отправить')
            }
        }
    };
</script>

<style scoped>

</style>