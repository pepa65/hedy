// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {specializeKeyword, extendKeyword} from "./tokens"
export const parser = LRParser.deserialize({
  version: 14,
  states: "3zQYQPOOOOQO'#Dd'#DdQYQPOOO!TQPO'#DjO!iQPO'#DbOOQO'#Dp'#DpO!wQPO'#DQO#VQPO'#DROOQO'#Dq'#DqO#eQPO'#DSOOQO'#Dr'#DrO#pQPO'#DUOOQO'#Ds'#DsO#{QPO'#DVOOQO'#Dt'#DtO$WQPO'#DWOOQO'#DT'#DTOOQO'#Du'#DuO$cQPO'#DXOOQO'#Dv'#DvO$wQPO'#DYOOQO'#Dx'#DxO%PQPO'#DZOOQO'#Dz'#DzO%XQPO'#D[OOQO'#EO'#EOO&XQPO'#DcOOQO'#Cs'#CsQ!OQPO'#DeQ&`QPOOOOQO-E7b-E7bOOQO'#Df'#DfO&gQPO,59`OOQO'#Cv'#CvO&uQPO,59`OOQO'#Dj'#DjOOQO-E7h-E7hOOQO-E7n-E7nO'QQPO'#DmOOQO'#Cw'#CwO(gQPO'#CwO(qOSO'#EZO(yOQO'#E_OOQO'#DP'#DPOOQO'#Dm'#DmO)RQPO,59mO)jQPO,59nOOQO-E7o-E7oOOQO,59n,59nO*RQPO,59pOOQO-E7p-E7pOOQO,59p,59pO*jQPO,59qOOQO-E7q-E7qOOQO,59q,59qO+RQPO,59rOOQO-E7r-E7rOOQO,59r,59rO+jQPO,59sOOQO-E7s-E7sOOQO,59s,59sO,RQPO,59tOOQO-E7t-E7tO,ZQPO,59uOOQO-E7v-E7vOOQO-E7x-E7xO,cQPO'#D^OOQO'#D]'#D]O`QPO,59vO`QPO,59}OOQO'#Da'#DaOOQO-E7|-E7|OOQO,59},59}O,qQPO,5:POOQO-E7c-E7cOOQO-E7d-E7dO-oQPO'#DgO.^QPO1G/SO.eQPO'#CwOOQO'#Dg'#DgO.oQPO1G.zO/QQPO1G/SOOQO'#Dl'#DlO/YQPO1G/UOOQO'#Cy'#CyOOQO'#Cz'#CzO/kQPO,5:pO/kQPO,5:pOOQO'#Dh'#DhO/sQPO,59gOOOO'#Dn'#DnO0ROSO,5:uOOQO,5:u,5:uOOOO'#Do'#DoO0ZOQO,5:yOOQO,5:y,5:yOOQO-E7k-E7kOOQO'#Dw'#DwO0cQPO1G/`OOQO'#Dy'#DyO0kQPO1G/aO1UQPO,59xO0sQPO,59xOOQO'#D|'#D|O1]QPO,59yOOQO'#D}'#D}O1eQPO,59zO`QPO1G/bO1mQPO1G/bOOQO1G/i1G/iO1xQPO'#DkO2QQPO7+$nOOQO-E7e-E7eOOQO-E7j-E7jO2`QPO7+$pOOQO1G0[1G0[O2wQPO1G0[OOQO-E7f-E7fOOQO'#Di'#DiO4XQPO1G/ROOQO1G/R1G/ROOOO-E7l-E7lOOQO1G0a1G0aOOOO-E7m-E7mOOQO1G0e1G0eOOQO-E7u-E7uOOQO7+$z7+$zOOQO-E7w-E7wOOQO7+${7+${O5hQPO1G/dOOQO'#D{'#D{O5xQPO1G/dOOQO1G/d1G/dOOQO-E7z-E7zOOQO1G/e1G/eOOQO-E7{-E7{OOQO1G/f1G/fO6PQPO7+$|OOQO7+$|7+$|O6[QPO,5:VOOQO,5:V,5:VOOQO-E7i-E7iOOQO-E7g-E7gOOQO-E7y-E7yOOQO<<Hh<<Hh",
  stateData: "6p~OeOS!uOS~OSgOTiOVVOWYOX[OY^OZaO[WO^cO`eObTOiRO!vPO~O]oO!wqOi!^X!s!^X!v!^XT!^X~OisO!s!UX!v!UXT!UX~ObTO!stX!vtXTtX~OixOlwO#OyO#SzO~O[WOixOlwO~OWYOixOlwO~OX[OixOlwO~OY^OixOlwO~OZaOixOlwO!s{X!v{XT{X~O^cOisO~O`eOisO~OSgOi!dOl!dO~OTiOVVOWYOX[OY^OZaO[WO^cO`eObTOiRO~O!vPO~P%dOSgO~P%dOP!tO]oOi!pOl!oO~OP!tOi!pOl!oO~O!y!vO!z!vO!{!wO!|!wOi!aXl!aX!s!aX!v!aX#O!aX#S!aXT!aX~OQ!zOikXlkX!skX!vkX!ykX!zkX!{kX!|kXTkX~O#OkX#SkX~P'uO#P!|O#Q#OO~O#T#PO#U#RO~OixOlwO#OyO#SzO!sua!vuaTua~O!y!vO!z!vO!{!wO!|!wO!sva!vvaTva~O!y!vO!z!vO!{!wO!|!wO!sxa!vxaTxa~O!y!vO!z!vO!{!wO!|!wO!sya!vyaTya~O!y!vO!z!vO!{!wO!|!wO!sza!vzaTza~O!y!vO!z!vO!{!wO!|!wO!s{a!v{aT{a~Oa#TOisO~O_#VOisO~O]oOc#ZOd#]O!wqO~O!vPOS!XaT!XaV!XaW!XaX!XaY!XaZ!Xa[!Xa^!Xa`!Xab!Xai!Xa!s!Xa~O!y!vO!z!vO!{!wO!|!wOi!ZXl!ZX!s!ZX!v!ZXT!ZX~Oq#bO~P'xOi!^Xq!^X~P'uOixOlwO!shi!vhiThi~OisOq#bO~OP!tOixOlwO#OyO#SzO~OiwOlwO~OQ!zOR#jOi#lOl#lO~O#P!|O#Q#nO~O#T#PO#U#pO~Oa#TOi#rO~O_#VOi#tO~OU#vOiwOlwO#OyO#SzO~O]oO~P0sOc#ZOi#zO~Od#]Oi#|O~OTiO!s!Oi!v!Oi~OisOl$QO~Oq#bO!spq!vpqTpq~OixOlwO#OyO#SzO!srq!vrqTrq~O!y!vO!z!vO!{!wO!|!wOi!xil!xi!s!xi!v!xi#O!xi#S!xiV!xiW!xiX!xiY!xiZ!xi[!xi^!xi`!xib!xiT!xi~OR#jOioiloi!soi!voi#Ooi#SoiToi~OV!QiW!QiX!QiY!QiZ!Qi[!Qi^!Qi`!Qib!Qii!Qi!v!Qi~O!y!vO!z!vO!{!wO!|!wO~P4sOU#vO~P4sOTiO!s!Oq!v!Oq~OisOq!_a!s!_a!v!_aT!_a~Oli~",
  goto: ",y#SPPPPPPPPPPPPPPPPPPPPPPP#T#YP#e#kP$a$l$w#YP#Y%c#Y#Y#Y#Y%m%m%m#Y#Y#Y%v%{&O&O&O&R#Y&_&j&|'T'_'f'm's(b(i(p(z)Q)W)d)p)|*Y*f*r+O+U+b+h+p+w+},TPPPPP,_PPPP,qPPP,qVlOQmUkOQmX!hj!f!g#_QrRR#Y!dWvV}!u#fQ!OXQ!RZQ!U]Q!X_Q![bU!npr!rQ#g!xQ#h!yT#u#X#Yc!xv!O!R!U!X![!n#h#uc!yv!O!R!U!X![!n#h#uW|V}!u#fQ!QXQ!TZQ!W]Q!Z_Q!^bV!qpr!rW|V}!u#fT#x#X#Y_`OQjm!f!g#_VkOQmR!fhR!ehQ!jjQ#`!fQ#a!gR#}#_UkOQmQ$O#`R$U#}QQOWnQ!g!k#_Q!gjQ!klR#_!fSmOQR!lmQpRS!mp#XR#X!dS!rprR#d!rS!{x!pR#i!{Q#k!{R$S#k^SOQjm!f!g#_YtS!_!a!s$PQ!_dQ!afS!sprR$P#bS#c!o!sR$R#cS!uprR#e!uQ}VS#S}#fR#f!uQ!}yR#m!}Q#QzR#o#Q^UOQjm!f!g#_RuU^XOQjm!f!g#_R!PX^ZOQjm!f!g#_R!SZ^]OQjm!f!g#_R!V]^_OQjm!f!g#_R!Y_^bOQjm!f!g#_R!]b^dOQjm!f!g#_R!`dQ#U!_R#q#U^fOQjm!f!g#_R!bfQ#W!aR#s#WUhOQmR!chS#w#X#YR$T#wQ#[!dR#y#[Q#^!dR#{#^YjOQm#`#}R!ijqwVXZ]_bpr}!r!u!x!y#X#Y#f]{V}!u#X#Y#f",
  nodeNames: "⚠ ask at random if else pressed print forward turn color sleep play is add from remove toList clear in not_in Comment Program Command Assign Text Op Expression Int Op Op ListAccess AssignList Comma Ask String Clear Print Play Turtle Forward Turn Color Sleep Add Remove If Condition EqualityCheck InListCheck NotInListCheck IfLessCommand ErrorInvalid Else",
  maxTerm: 98,
  nodeProps: [
    ["group", 39,"turtle"]
  ],
  skippedNodes: [0,21],
  repeatNodeCount: 27,
  tokenData: "*x~R!^OY$}YZ&UZp$}pq&Zqr$}rs&`st&etw$}wx&|xz$}z{'R{|'W|}']}!O'b!O!P$}!P!Q'g!Q!R'l!R!S'l!S!T'l!T!U'l!U!V'l!V!W'l!W!X'l!X!Y'l!Y!Z'l!Z!['l![!_$}!_!`*s!`#Q$}#RBn$}BnBo']BoDf$}DfDg'lDgDh'lDhDi'lDiDj'lDjDk'lDkDl'lDlDm'lDmDn'lDnDo'lDoDp'lDpGl$}GlGm'lGmGn'lGnGo'lGoGp'lGpGq'lGqGr'lGrGs'lGsGt'lGtGu'lGuGv'lGv&FV$}&FV&FW']&FW;'S$};'S;=`&O<%l?Hb$}?Hb?Hc']?HcO$}~%S^i~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!_$}!`#Q$}#RBn$}Bo&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~&RP;=`<%l$}~&ZO!v~~&`O!u~~&eO#O~~&jSe~OY&eZ;'S&e;'S;=`&v<%lO&e~&yP;=`<%l&e~'RO#S~~'WO!y~~']O!{~~'bOq~~'gO!|~~'lO!z~~'s!Ol~i~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!R'l!R!S'l!S!T'l!T!U'l!U!V'l!V!W'l!W!X'l!X!Y'l!Y!Z'l!Z!['l![!_$}!`#Q$}#RBn$}BoDf$}DfDg'lDgDh'lDhDi'lDiDj'lDjDk'lDkDl'lDlDm'lDmDn'lDnDo'lDoDp'lDpGl$}GlGm'lGmGn'lGnGo'lGoGp'lGpGq'lGqGr'lGrGs'lGsGt'lGtGu'lGuGv'lGv&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~*xO!w~",
  tokenizers: [2, new LocalTokenGroup("_~RQYZXwxX~^O#U~~", 14, 97), new LocalTokenGroup("_~RQYZXrsX~^O#Q~~", 14, 93)],
  topRules: {"Program":[0,22]},
  dynamicPrecedences: {"52":-10},
  specialized: [{term: 25, get: (value: any, stack: any) => (specializeKeyword(value, stack) << 1), external: specializeKeyword},{term: 25, get: (value: any, stack: any) => (extendKeyword(value, stack) << 1) | 1, external: extendKeyword, extend: true}],
  tokenPrec: 995
})
