import { Form, FormContainer, Input, SendButton, StyledLabel, Select} from "./styled";

 function TelaCadastroEndereco(props) {

    return(
        <FormContainer>
            <h1>Cadastre seu endereço</h1>
            <Form>
                <StyledLabel>Endereço:
                    <Input/>
                </StyledLabel>
                <StyledLabel>Número:
                    <Input/>
                </StyledLabel>
                <StyledLabel>Complemento:
                    <Input/>
                </StyledLabel>
                <StyledLabel>Bairro:
                    <Input/>
                </StyledLabel>
                <StyledLabel>Cidade:
                    <Input/>
                </StyledLabel>
                <StyledLabel>Estado:
                <Select id="estado" name="estado">
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                    <option value="EX">Estrangeiro</option>
                </Select>
                </StyledLabel>
                <StyledLabel>Telefone:
                    <Input id="telNo" type="tel" placeholder="(xx)xxxxx-xxxx" pattern="([0-9]{2})[0-9]{5}-[0-9]{4}" required/>
                </StyledLabel>
                <SendButton onClick={() => props.mudarTela(3)}>Salvar</SendButton>
            </Form>
        </FormContainer>
    )
}

export default TelaCadastroEndereco;