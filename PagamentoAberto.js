import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function PagamentoAberto({ setTela }) {

    const [filtro, setFiltro] = useState("aberto");

    return (
        <View style={styles.container}>

            <ScrollView
                contentContainerStyle={styles.conteudo}
                showsVerticalScrollIndicator={false}
            >

                {/* TÍTULO */}
                <Text style={styles.titulo}>

                </Text>


                {/* RESUMO FINANCEIRO */}
                <View style={styles.resumo}>

                    <Text style={styles.tituloResumo}>
                        Resumo Financeiro
                    </Text>

                    <View style={styles.linhaResumo}>

                        {/* EM ABERTO */}
                        <View style={styles.coluna}>

                            <Text style={[styles.nomeResumo, styles.vermelho]}>
                                Em Aberto
                            </Text>

                            <Text style={[styles.valorResumo, styles.vermelho]}>
                                R$ 1.000,00
                            </Text>

                            <Text style={styles.pequeno}>
                                1 Cobrança
                            </Text>

                        </View>


                        <View style={styles.divisoria} />


                        {/* A VENCER */}
                        <View style={styles.coluna}>

                            <Text style={[styles.nomeResumo, styles.amarelo]}>
                                A Vencer
                            </Text>

                            <Text style={[styles.valorResumo, styles.amarelo]}>
                                R$ 1.000,00
                            </Text>

                            <Text style={styles.pequeno}>
                                1 Cobrança
                            </Text>

                        </View>


                        <View style={styles.divisoria} />


                        {/* PAGOS */}
                        <View style={styles.coluna}>

                            <Text style={[styles.nomeResumo, styles.verde]}>
                                Pagos
                            </Text>

                            <Text style={[styles.valorResumo, styles.verde]}>
                                R$ 1.000,00
                            </Text>

                            <Text style={styles.pequeno}>
                                1 Pago
                            </Text>

                        </View>

                    </View>

                </View>


                {/* ABAS */}
                <View style={styles.abas}>

                    {/* EM ABERTO */}
                    <TouchableOpacity
                        style={styles.aba}
                        onPress={() => setFiltro("aberto")}
                    >

                        <Text
                            style={[
                                styles.textoAba,
                                filtro === "aberto" && styles.abaAtiva
                            ]}
                        >
                            Em Aberto
                        </Text>

                        {filtro === "aberto" && (
                            <View style={styles.linhaAtiva} />
                        )}

                    </TouchableOpacity>


                    {/* A VENCER */}
                    <TouchableOpacity
                        style={styles.aba}
                        onPress={() => setFiltro("vencer")}
                    >

                        <Text
                            style={[
                                styles.textoAba,
                                filtro === "vencer" && styles.abaAtiva
                            ]}
                        >
                            A Vencer
                        </Text>

                        {filtro === "vencer" && (
                            <View style={styles.linhaAtiva} />
                        )}

                    </TouchableOpacity>


                    {/* PAGOS */}
                    <TouchableOpacity
                        style={styles.aba}
                        onPress={() => setFiltro("pagos")}
                    >

                        <Text
                            style={[
                                styles.textoAba,
                                filtro === "pagos" && styles.abaAtiva
                            ]}
                        >
                            Pagos
                        </Text>

                        {filtro === "pagos" && (
                            <View style={styles.linhaAtiva} />
                        )}

                    </TouchableOpacity>

                </View>


                {/* ================================================== */}
                {/* EM ABERTO */}
                {/* ================================================== */}

                {filtro === "aberto" && (

                    <View style={styles.cardPagamento}>

                        <View style={styles.topoCard}>

                            <View style={styles.iconeDocumentoVermelho}>
                                <Ionicons
                                    name="document-outline"
                                    size={30}
                                    color="#FF4D55"
                                />
                            </View>

                            <View>
                                <Text style={styles.honorario}>
                                    Honorário
                                </Text>

                                <Text style={styles.processo}>
                                    Processo Nº 0000001
                                </Text>
                            </View>

                        </View>


                        <View style={styles.informacoes}>

                            {/* VENCIMENTO */}
                            <View style={styles.blocoInformacao}>

                                <View style={styles.infoTitulo}>

                                    <Ionicons
                                        name="calendar-outline"
                                        size={19}
                                        color="#0757B9"
                                    />

                                    <Text style={styles.infoTexto}>
                                        Vencimento
                                    </Text>

                                </View>

                                <Text style={styles.infoValor}>
                                    02/08/2026
                                </Text>

                            </View>


                            {/* VALOR */}
                            <View style={styles.blocoInformacao}>

                                <Text style={styles.infoTexto}>
                                    Valor
                                </Text>

                                <Text style={styles.valorVermelho}>
                                    R$ 1.000,00
                                </Text>

                            </View>

                        </View>


                        <TouchableOpacity style={styles.botaoPagar}>

                            <Text style={styles.textoBotao}>
                                Pagar Agora
                            </Text>

                        </TouchableOpacity>

                    </View>

                )}


                {/* ================================================== */}
                {/* A VENCER */}
                {/* ================================================== */}

                {filtro === "vencer" && (

                    <View style={styles.cardPagamento}>

                        <View style={styles.topoCard}>

                            <View style={styles.iconeDocumentoAmarelo}>
                                <Ionicons
                                    name="document-outline"
                                    size={30}
                                    color="#E6B000"
                                />
                            </View>

                            <View>
                                <Text style={styles.honorario}>
                                    Honorário
                                </Text>

                                <Text style={styles.processo}>
                                    Processo Nº 0000001
                                </Text>
                            </View>

                        </View>


                        <View style={styles.informacoes}>

                            {/* VENCIMENTO */}
                            <View style={styles.blocoInformacao}>

                                <View style={styles.infoTitulo}>

                                    <Ionicons
                                        name="calendar-outline"
                                        size={19}
                                        color="#0757B9"
                                    />

                                    <Text style={styles.infoTexto}>
                                        Vencimento
                                    </Text>

                                </View>

                                <Text style={styles.infoValor}>
                                    02/08/2026
                                </Text>

                            </View>


                            {/* VALOR */}
                            <View style={styles.blocoInformacao}>

                                <Text style={styles.infoTexto}>
                                    Valor
                                </Text>

                                <Text style={styles.valorAmarelo}>
                                    R$ 1.000,00
                                </Text>

                            </View>

                        </View>


                        <TouchableOpacity style={styles.botaoPagar}>

                            <Text style={styles.textoBotao}>
                                Pagar Agora
                            </Text>

                        </TouchableOpacity>

                    </View>

                )}


                {/* ================================================== */}
                {/* PAGOS */}
                {/* ================================================== */}

                {filtro === "pagos" && (

                    <View style={styles.cardPagamento}>

                        <View style={styles.topoCard}>

                            <View style={styles.iconeDocumentoVerde}>
                                <Ionicons
                                    name="document-outline"
                                    size={30}
                                    color="#59A83B"
                                />
                            </View>

                            <View>
                                <Text style={styles.honorario}>
                                    Honorário
                                </Text>

                                <Text style={styles.processo}>
                                    Processo Nº 0000001
                                </Text>
                            </View>

                        </View>


                        <View style={styles.informacoes}>

                            {/* FORMA DE PAGAMENTO */}
                            <View style={styles.blocoInformacao}>

                                <Text style={styles.infoTexto}>
                                    Forma de pagamento
                                </Text>

                                <Text style={styles.infoValor}>
                                    Pix
                                </Text>

                            </View>


                            {/* VALOR */}
                            <View style={styles.blocoInformacao}>

                                <Text style={styles.infoTexto}>
                                    Valor
                                </Text>

                                <Text style={styles.valorVerde}>
                                    R$ 1.000,00
                                </Text>

                            </View>

                        </View>

                    </View>

                )}

            </ScrollView>


            {/* ================================================== */}
            {/* MENU INFERIOR */}
            {/* ================================================== */}

            <View style={styles.menu}>

                {/* INÍCIO */}
                <TouchableOpacity style={styles.menuItem}>

                    <Ionicons
                        name="home-outline"
                        size={26}
                        color="#0757B9"
                    />

                    <Text style={styles.menuTexto}>
                        Início
                    </Text>

                </TouchableOpacity>


                {/* PAGAMENTOS */}
                <TouchableOpacity style={styles.menuItem}>

                    <Ionicons
                        name="cash"
                        size={27}
                        color="#0757B9"
                    />

                    <Text style={styles.menuTexto}>
                        Pagamentos
                    </Text>

                </TouchableOpacity>


                {/* REUNIÕES */}
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => setTela("reunioes")}
                >

                    <Ionicons
                        name="calendar-outline"
                        size={27}
                        color="#0757B9"
                    />

                    <Text style={styles.menuTexto}>
                        Reuniões
                    </Text>

                </TouchableOpacity>


                {/* PROCESSOS */}
                <TouchableOpacity style={styles.menuItem}>

                    <Ionicons
                        name="document-outline"
                        size={26}
                        color="#0757B9"
                    />

                    <Text style={styles.menuTexto}>
                        Processos
                    </Text>

                </TouchableOpacity>


                {/* PERFIL */}
                <TouchableOpacity style={styles.menuItem}>

                    <Ionicons
                        name="person-outline"
                        size={26}
                        color="#0757B9"
                    />

                    <Text style={styles.menuTexto}>
                        Perfil
                    </Text>

                </TouchableOpacity>

            </View>

        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },


    conteudo: {
        paddingHorizontal: 24,
        paddingTop: 0,
        paddingBottom: 110,
    },


    /* TÍTULO */

    titulo: {
        fontSize: 25,
        fontWeight: "800",
        color: "#2A2929",
        marginBottom: 18,
    },


    /* RESUMO */

    resumo: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 18,
        elevation: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        marginBottom: 28,
    },


    tituloResumo: {
        fontSize: 18,
        fontWeight: "800",
        color: "#000000",
        marginBottom: 20,
    },


    linhaResumo: {
        flexDirection: "row",
        alignItems: "center",
    },


    coluna: {
        flex: 1,
        alignItems: "center",
    },


    divisoria: {
        width: 1,
        height: 65,
        backgroundColor: "#B5CFFF",
    },


    nomeResumo: {
        fontSize: 14,
        fontWeight: "800",
        marginBottom: 9,
        textAlign: "center",
    },


    valorResumo: {
        fontSize: 14,
        fontWeight: "800",
        marginBottom: 13,
        textAlign: "center",
    },


    pequeno: {
        fontSize: 12,
        color: "#666666",
        fontWeight: "600",
    },


    vermelho: {
        color: "#FF4D55",
    },


    amarelo: {
        color: "#E6B000",
    },


    verde: {
        color: "#59A83B",
    },


    /* ABAS */

    abas: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC",
        marginBottom: 18,
    },


    aba: {
        flex: 1,
        alignItems: "center",
        paddingBottom: 10,
    },


    textoAba: {
        fontSize: 14,
        fontWeight: "700",
        color: "#999999",
    },


    abaAtiva: {
        color: "#0757B9",
    },


    linhaAtiva: {
        position: "absolute",
        bottom: -1,
        width: "75%",
        height: 3,
        backgroundColor: "#0757B9",
        borderRadius: 3,
    },


    /* CARD */

    cardPagamento: {
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        padding: 18,
        elevation: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        marginBottom: 25,
    },


    topoCard: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 24,
    },


    iconeDocumentoVermelho: {
        width: 40,
        height: 40,
        borderRadius: 6,
        backgroundColor: "#FFE9EA",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },


    iconeDocumentoAmarelo: {
        width: 40,
        height: 40,
        borderRadius: 6,
        backgroundColor: "#FFF6D9",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },


    iconeDocumentoVerde: {
        width: 40,
        height: 40,
        borderRadius: 6,
        backgroundColor: "#E9F8E4",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },


    honorario: {
        fontSize: 15,
        fontWeight: "800",
        color: "#222222",
    },


    processo: {
        fontSize: 12,
        color: "#999999",
        marginTop: 4,
    },


    informacoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 8,
        marginBottom: 18,
    },


    blocoInformacao: {
        minWidth: 120,
    },


    infoTitulo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },


    infoTexto: {
        fontSize: 12,
        color: "#999999",
        marginBottom: 5,
    },


    infoValor: {
        fontSize: 13,
        color: "#333333",
        textAlign: "center",
    },


    valorVermelho: {
        color: "#FF4D55",
        fontSize: 13,
        fontWeight: "800",
    },


    valorAmarelo: {
        color: "#E6B000",
        fontSize: 13,
        fontWeight: "800",
    },


    valorVerde: {
        color: "#59A83B",
        fontSize: 13,
        fontWeight: "800",
    },


    /* BOTÃO */

    botaoPagar: {
        backgroundColor: "#0757B9",
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 22,
        alignSelf: "flex-end",
    },


    textoBotao: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "800",
    },


    /* MENU */

    menu: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 78,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#D0D0D0",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },


    menuItem: {
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
    },


    menuTexto: {
        fontSize: 9,
        color: "#0757B9",
        marginTop: 4,
        fontWeight: "600",
    },

});