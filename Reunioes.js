import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function Reunioes({ setTela }) {

    const [filtro, setFiltro] = useState("proximas");

    return (
        <View style={styles.container}>

            <ScrollView
                contentContainerStyle={styles.conteudo}
                showsVerticalScrollIndicator={false}
            >

                {/* TÍTULO */}
                <Text style={styles.titulo}>

                </Text>


                {/* CARD SUAS REUNIÕES */}
                <View style={styles.cardTopo}>

                    <Text style={styles.tituloSuasReunioes}>
                        Suas Reuniões
                    </Text>

                    <TouchableOpacity
                        style={styles.botaoAgendar}
                        onPress={() => setTela("agendar")}
                    >
                        <Text style={styles.textoAgendar}>
                            + Agendar Reunião
                        </Text>
                    </TouchableOpacity>

                </View>


                {/* FILTRO */}
                <View style={styles.abas}>

                    {/* PRÓXIMAS */}
                    <TouchableOpacity
                        style={styles.aba}
                        onPress={() => setFiltro("proximas")}
                    >

                        <Text
                            style={[
                                styles.textoAba,
                                filtro === "proximas" && styles.abaAtiva
                            ]}
                        >
                            Próximas
                        </Text>

                        {filtro === "proximas" && (
                            <View style={styles.linhaAtiva} />
                        )}

                    </TouchableOpacity>


                    {/* REALIZADAS */}
                    <TouchableOpacity
                        style={styles.aba}
                        onPress={() => setFiltro("realizadas")}
                    >

                        <Text
                            style={[
                                styles.textoAba,
                                filtro === "realizadas" && styles.abaAtiva
                            ]}
                        >
                            Realizadas
                        </Text>

                        {filtro === "realizadas" && (
                            <View style={styles.linhaAtiva} />
                        )}

                    </TouchableOpacity>

                </View>


                {/* ========================================= */}
                {/* PRÓXIMAS */}
                {/* ========================================= */}

                {filtro === "proximas" && (

                    <View style={styles.cardReuniao}>

                        {/* TÍTULO DA REUNIÃO */}
                        <View style={styles.linhaPrincipal}>

                            <View style={styles.iconeRelogio}>

                                <Ionicons
                                    name="time-outline"
                                    size={30}
                                    color="#0757B9"
                                />

                            </View>

                            <Text style={styles.nomeReuniao}>
                                Andamento do Processo
                            </Text>

                        </View>


                        {/* DATA */}
                        <View style={styles.informacao}>

                            <Ionicons
                                name="calendar-outline"
                                size={21}
                                color="#0757B9"
                            />

                            <Text style={styles.textoInformacao}>
                                03/08/2026 (Segunda-Feira)
                            </Text>

                        </View>


                        {/* HORÁRIO */}
                        <View style={styles.informacao}>

                            <Ionicons
                                name="time-outline"
                                size={21}
                                color="#0757B9"
                            />

                            <Text style={styles.textoInformacao}>
                                14:30
                            </Text>

                        </View>


                        {/* LOCAL */}
                        <View style={styles.informacao}>

                            <Ionicons
                                name="location-outline"
                                size={22}
                                color="#0757B9"
                            />

                            <Text style={styles.textoInformacao}>
                                Escritório
                            </Text>

                        </View>


                        {/* STATUS */}
                        <View style={styles.areaStatus}>

                            <View style={styles.statusConfirmada}>

                                <Text style={styles.textoConfirmada}>
                                    Confirmada
                                </Text>

                            </View>

                        </View>

                    </View>

                )}


                {/* ========================================= */}
                {/* REALIZADAS */}
                {/* ========================================= */}

                {filtro === "realizadas" && (

                    <View style={styles.cardReuniao}>

                        {/* TÍTULO DA REUNIÃO */}
                        <View style={styles.linhaPrincipal}>

                            <View style={styles.iconeRealizada}>

                                <Ionicons
                                    name="checkmark-outline"
                                    size={30}
                                    color="#59A83B"
                                />

                            </View>

                            <Text style={styles.nomeReuniao}>
                                Consulta Inicial
                            </Text>

                        </View>


                        {/* DATA */}
                        <View style={styles.informacao}>

                            <Ionicons
                                name="calendar-outline"
                                size={21}
                                color="#0757B9"
                            />

                            <Text style={styles.textoInformacao}>
                                03/08/2026 (Segunda-Feira)
                            </Text>

                        </View>


                        {/* HORÁRIO */}
                        <View style={styles.informacao}>

                            <Ionicons
                                name="time-outline"
                                size={21}
                                color="#0757B9"
                            />

                            <Text style={styles.textoInformacao}>
                                14:30
                            </Text>

                        </View>


                        {/* LOCAL */}
                        <View style={styles.informacao}>

                            <Ionicons
                                name="location-outline"
                                size={22}
                                color="#0757B9"
                            />

                            <Text style={styles.textoInformacao}>
                                Escritório
                            </Text>

                        </View>


                        {/* STATUS */}
                        <View style={styles.areaStatus}>

                            <View style={styles.statusRealizada}>

                                <Text style={styles.textoRealizada}>
                                    Realizada
                                </Text>

                            </View>

                        </View>

                    </View>

                )}

            </ScrollView>


            {/* ========================================= */}
            {/* MENU INFERIOR */}
            {/* ========================================= */}

            <View style={styles.menu}>

                {/* INÍCIO */}
                <TouchableOpacity
                    style={styles.menuItem}
                >

                    <Ionicons
                        name="home-outline"
                        size={27}
                        color="#0757B9"
                    />

                    <Text style={styles.menuTexto}>
                        Início
                    </Text>

                </TouchableOpacity>


                {/* PAGAMENTOS */}
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => setTela("aberto")}
                >
                    <Ionicons
                        name="cash-outline"
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
                >

                    <Ionicons
                        name="calendar"
                        size={27}
                        color="#0757B9"
                    />

                    <Text style={styles.menuTexto}>
                        Reuniões
                    </Text>

                </TouchableOpacity>


                {/* PROCESSOS */}
                <TouchableOpacity
                    style={styles.menuItem}
                >

                    <Ionicons
                        name="document-outline"
                        size={27}
                        color="#0757B9"
                    />

                    <Text style={styles.menuTexto}>
                        Processos
                    </Text>

                </TouchableOpacity>


                {/* PERFIL */}
                <TouchableOpacity
                    style={styles.menuItem}
                >

                    <Ionicons
                        name="person-outline"
                        size={27}
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


    /* CONTEÚDO */

    conteudo: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 110,
    },


    /* TÍTULO */

    titulo: {
        fontSize: 25,
        fontWeight: "800",
        color: "#2A2929",
        marginBottom: 15,
    },


    /* CARD SUPERIOR */

    cardTopo: {
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        elevation: 5,

        shadowColor: "#000000",
        shadowOpacity: 0.15,
        shadowRadius: 6,

        shadowOffset: {
            width: 0,
            height: 3,
        },

        marginBottom: 23,
    },


    tituloSuasReunioes: {
        fontSize: 18,
        fontWeight: "800",
        color: "#222222",
    },


    botaoAgendar: {
        backgroundColor: "#0757B9",
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal: 13,
    },


    textoAgendar: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "800",
    },


    /* ABAS */

    abas: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC",
        marginBottom: 23,
    },


    aba: {
        flex: 1,
        alignItems: "center",
        paddingBottom: 10,
    },


    textoAba: {
        fontSize: 15,
        fontWeight: "700",
        color: "#AAAAAA",
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


    /* CARD DA REUNIÃO */

    cardReuniao: {
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

        marginBottom: 20,
    },


    /* TÍTULO DO CARD */

    linhaPrincipal: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },


    iconeRelogio: {
        width: 40,
        height: 40,
        borderRadius: 6,
        backgroundColor: "#E5F0FF",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },


    iconeRealizada: {
        width: 40,
        height: 40,
        borderRadius: 6,
        backgroundColor: "#E9F8E4",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },


    nomeReuniao: {
        fontSize: 16,
        fontWeight: "800",
        color: "#222222",
    },


    /* INFORMAÇÕES */

    informacao: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 13,
    },


    textoInformacao: {
        fontSize: 13,
        color: "#666666",
        marginLeft: 10,
    },


    /* STATUS */

    areaStatus: {
        marginTop: 4,
        alignItems: "flex-start",
    },


    statusConfirmada: {
        backgroundColor: "#D4E7FF",
        borderWidth: 1,
        borderColor: "#0757B9",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 12,
    },


    textoConfirmada: {
        color: "#0757B9",
        fontSize: 12,
        fontWeight: "800",
    },


    statusRealizada: {
        backgroundColor: "#E1F5D9",
        borderWidth: 1,
        borderColor: "#59A83B",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 12,
    },


    textoRealizada: {
        color: "#59A83B",
        fontSize: 12,
        fontWeight: "800",
    },


    /* MENU INFERIOR */

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