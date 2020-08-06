import React, { useContext } from "react";
import tw from 'twin.macro'
import "./../../../assets/styles.css"
import { SimpleButton } from "../../../design-system/buttons";
// import { FormattedMessage } from 'react-intl'

const BackContainer = tw.div`w-full max-w-xs`
const FormLogin = tw.form`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`

export default function LoginView({ loginEvent }) {
    return (
        <BackContainer>
            <FormLogin>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        {/* <FormattedMessage id="login.username" defaultMessage="Usuário" /> */}
                        Usuário
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Senha
                    </label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p class="text-red-500 text-xs italic">Por favor informe a senha.</p>
                </div>
                <div class="flex items-center justify-between">
                    <SimpleButton onClick={loginEvent} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        login
                    </SimpleButton>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Esqueceu a senha?
                    </a>
                </div>
            </FormLogin>
            <p class="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </BackContainer>
    )
}