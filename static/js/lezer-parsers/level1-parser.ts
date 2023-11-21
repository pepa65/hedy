// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser} from "@lezer/lr"
import {extendKeyword} from "./tokens"
export const parser = LRParser.deserialize({
  version: 14,
  states: "%vQYQPOOOOQO'#Co'#CoQYQPOOOOQO'#Cq'#CqOtQPO'#CfOOQO'#Cr'#CrO|QPO'#CnOOQO'#Cs'#CsO!XQPO'#ChOOQO'#Ct'#CtO!aQPO'#CiOOQO'#Cu'#CuO!oQPO'#CkOOQO'#Cv'#CvO!wQPO'#ClOOQO'#Cw'#CwO#PQPO'#CmOOQO'#Cj'#CjOOQO'#Ce'#CeQoQPO'#CpQ#XQPOOOOQO-E6m-E6mOOQO-E6o-E6oO#pQPO,59QOOQO-E6p-E6pO#{QPO,59SOOQO-E6q-E6qO$WQPO,59TOOQO-E6r-E6rOOQO-E6s-E6sOOQO,59V,59VOOQO-E6t-E6tOOQO,59W,59WOOQO-E6u-E6uOOQO,59X,59XO$cQPO,59[OOQO-E6n-E6n",
  stateData: "%Q~OVOSnOS~OPROQZOR]OSXOTVOU_OZTOoPO~OPROZTO~OZTOlbXobX~OTVOZTO~OSXOZTOl]Xo]X~OQZOZnO~OR]OZpO~OU_OZrO~OPROQZOR]OSXOTVOU_OZTO~OZTOlYaoYa~OZTOl[ao[a~OZTOl]ao]a~OoPOPdaQdaRdaSdaTdaUdaZdalda~O",
  goto: "#ulPPPPPPPPPmrPrrrwwwr|!W!_!g!{#T#]#e#mVcOQdVbOQdVaOQdQQOSeQsRscSdOQRtdUSOQdRfSUUOQdQgSWhUgikQiWRkYUWOQdRjWUYOQdRlYU[OQdRm[U^OQdRo^U`OQdRq`",
  nodeNames: "⚠ print forward turn echo ask color Comment Program Command Print Text Ask Echo Turtle Forward Turn Color ErrorInvalid",
  maxTerm: 31,
  nodeProps: [
    ["group", 14,"turtle"]
  ],
  skippedNodes: [0,7],
  repeatNodeCount: 9,
  tokenData: "#O~RXOYnYZ!]Zpnpq!bqsnst!gt;'Sn;'S;=`!V<%lOn~sUZ~OYnZpnqsnt;'Sn;'S;=`!V<%lOn~!YP;=`<%ln~!bOo~~!gOn~~!lSV~OY!gZ;'S!g;'S;=`!x<%lO!g~!{P;=`<%l!g",
  tokenizers: [0],
  topRules: {"Program":[0,8]},
  dynamicPrecedences: {"18":-10},
  specialized: [{term: 11, get: (value: any, stack: any) => (extendKeyword(value, stack) << 1) | 1, external: extendKeyword, extend: true}],
  tokenPrec: 0
})
