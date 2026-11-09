// =====================================================================
// CONFIGURAÇÃO DA CENTRAL — o único arquivo que muda de um cliente para outro
// =====================================================================

// 1) Conexão com o Supabase do cliente (Supabase > Project Settings > API Keys)
//    Use a chave PÚBLICA (anon ou publishable). Nunca a secreta.
const SUPABASE_URL = 'https://usotaikezdmanolhdzjz.supabase.co';
const SUPABASE_KEY = 'sb_publishable_VUYBBBfIg6JwEhsUccnkjA_CDZJFStT';

// 2) Marca do cliente (aparece no título, nos relatórios, na página do aluno e no PDF do QR Code)
const MARCA = {
  sigla: 'UNIAVAN',                       // ex.: 'IDOMED'
  nome: 'Centro Universitário Avantis',  // ex.: 'Instituto de Educação Médica'
  logo: 'logo-cliente.png',               // arquivo do logo do cliente, na mesma pasta (PNG sem fundo)
  exemploUnidade: 'UNIAVAN Unidade Centro' // sugestão no campo "Nova unidade"
};

// 3) Opcional: link do botão "Enviar backup para o Drive" (veja backup-google-drive/LEIA-ME-BACKUP.md)
const BACKUP_DRIVE_URL = 'https://script.google.com/macros/s/AKfycbzJAUKl1hp2qs-u2OvQAAvcUcbBiBW8URLm0wwnVOZk8atHOVXtPwXPn7ZYgIoZ2BNg3A/exec';
