const { test, expect } = require('@playwright/test');

// Me array ekata oyage Excel eke thiyena vakiya 35ma danna.
// Mama sample 3k damma, oya ithiri tika danna.
const testCases = [
    { id: 'Pos_Fun_0001', input: 'api adha paasal yanavaa.', expected: 'අපි අද පාසල් යනවා.' },
    { id: 'Pos_Fun_0002', input: 'oyaa kavadhdha ennee?', expected: 'ඔයා කවද්ද එන්නේ?' },
    { id: 'Pos_Fun_0003', input: 'mama gedhara yanavaa,ethana nidhahas.', expected: 'මම ගෙදර යනවා,එතන නිදහස්.' },
    { id: 'Pos_Fun_0004', input: 'oya enavaanam mama balan innavaa.', expected: 'ඔය එනවානම් මම බලන් ඉන්නවා.' },
    { id: 'Pos_Fun_0005', input: 'vahaama methanata enna.', expected: 'වහාම මෙතනට එන්න.' },
    { id: 'Pos_Fun_0006', input: 'mama adha enne naehae.', expected: 'මම අද එන්නෙ නැහැ.' },
    { id: 'Pos_Fun_0007', input: 'suba udhaeesanak veevaa!', expected: 'සුබ උදෑසනක් වේවා!' },
    { id: 'Pos_Fun_0008', input: 'eeyi, ooka meheta dhiyan.', expected: 'ඒයි, ඕක මෙහෙට දියන්.' },
    { id: 'Pos_Fun_0009', input: 'karuNaakaralaa mata udhavvak karanna.', expected: 'කරුණාකරලා මට උදව්වක් කරන්න.' },
    { id: 'Pos_Fun_0010', input: 'tika tika vathura bonna.', expected: 'ටික ටික වතුර බොන්න.' },
    { id: 'Pos_Fun_0011', input: 'api iiLaGa sathiyee yamu.', expected: 'අපි ඊළඟ සතියේ යමු' },
    { id: 'Pos_Fun_0012', input: 'eyaalaa adha enavaa.', expected: 'එයාලා අද එනවා.' },
    { id: 'Pos_Fun_0013', input: 'Zoom link eka evanna.', expected: 'Zoom link එක එවන්න.' },
    { id: 'Pos_Fun_0014', input: 'mama Colombo yanne Bus ekee.', expected: 'මම Colombo යන්නේ Bus එකේ' },
    { id: 'Pos_Fun_0015', input: 'mama SMS ekak dhaemmaa.', expected: 'මම SMS එකක් දැම්මා.' },
    { id: 'Pos_Fun_0016', input: 'meka Rs. 500/= venavaa.', expected: 'මේක Rs. 500/= වෙනවා.' },
    { id: 'Pos_Fun_0017', input: 'meeting eka 10.30 AM thiyennee.', expected: 'meeting එක 10.30 AM තියෙන්නේ.' },
    { id: 'Pos_Fun_0018', input: 'ayyo! eeka hari naehae.', expected: 'අයියෝ! ඒක හරි නැහැ.' },
    { id: 'Pos_Fun_0019', input: 'mama gedhara yanavaa.\oyaa enavadha?', expected: 'මම ගෙදර යනවා.\ඔයා එනවද?' },
    { id: 'Pos_Fun_0020', input: 'puLuvannam mata eeka evanna.', expected: 'පුළුවන් නම් මට ඒක එවන්න.' },
    { id: 'Pos_Fun_0021', input: 'nipaa vairasa roogaya yanu praDhaana vashayen saththvayan athara, visheeShayenma palathuru vavulan athara dhaknata laebena aasaadhana roogayakYAna bavath, aasaadhitha saththvayan hoo aasaadhitha dhravYA samaGA samiipa sambanDhathaavayak aethi viimen mema roogaya ithaa kalaathurakin minisunta boo viya haeki bavath, minisun athara aasaadhanaya viima sidhuviya haekkee samiipa haa dhigukaaliina sambanDhathaavaya harahaa bavath ema niveedhanayee dhakvaa aetha.', expected: 'නිපා වෛරස රෝගය යනු ප්‍රධාන වශයෙන් සත්ත්වයන් අතර, විශේෂයෙන්ම පලතුරු වවුලන් අතර දක්නට ලැබෙන ආසාදන රෝගයක්‍යන බවත්, ආසාදිත සත්ත්වයන් හෝ ආසාදිත ද්‍රව්‍ය සමඟ සමීප සම්බන්ධතාවයක් ඇති වීමෙන් මෙම රෝගය ඉතා කලාතුරකින් මිනිසුන්ට බෝ විය හැකි බවත්, මිනිසුන් අතර ආසාදනය වීම සිදුවිය හැක්කේ සමීප හා දිගුකාලීන සම්බන්ධතාවය හරහා බවත් එම නිවේදනයේ දක්වා ඇත.' },
    { id: 'Pos_Fun_0022', input: 'ela kiri machan!', expected: 'එල කිරි මචන්!' },
    { id: 'Pos_Fun_0023', input: 'magee NIC eka dhennam.', expected: 'මගේ NIC එක දෙන්නම්.' },
    { id: 'Pos_Fun_0024', input: 'vishvavidhYaalayatayana', expected: 'විශ්වවිද්‍යාලයටයන' },
    { id: 'Neg_Fun_0001', input: 'mamagedarayanavaa	', expected: 'මමගෙදරයනවා' },// Fail wenna oni ekak
    { id: 'Neg_Fun_0002', input: 'pragnava', expected: 'ප්‍රඥාඅව' },// Fail wenna oni ekak
    { id: 'Neg_Fun_0003', input: 'mama  yanava', expected: 'මම  යනවා' },// Fail wenna oni ekak
    { id: 'Neg_Fun_0004', input: 'aman@123', expected: 'අමාන්@123' },// Fail wenna oni ekak
    { id: 'Neg_Fun_0005', input: '2+2=4', expected: 'දෙක එකතුකිරීම දෙක සමානයි හතර' },// Fail wenna oni ekak
    { id: 'Neg_Fun_0006', input: 'bruh eka maru', expected: 'බ්‍රහ් එක මරු' },// Fail wenna oni ekak
    { id: 'Neg_Fun_0007', input: 'magee web eka google.com', expected: 'මගේ වෙබ් එක ගූගල්' },// Fail wenna oni ekak
    { id: 'Neg_Fun_0008', input: 'maMa geDaRa yaNaVa', expected: 'මම ගෙදර යනවා' },// Fail wenna oni ekak
    { id: 'Neg_Fun_0009', input: 'ubala waren man ennam heta ude', expected: 'උබල වරෙන් මං එන්නම් හෙට උදේ' },// Fail wenna oni ekak
    { id: 'Neg_Fun_0010', input: 'shiromi suranganaviyak wage lassani', expected: 'ෂිරෝමී සුරන්ගනාවියක් වගේ ලස්සනයි' },// Fail wenna oni ekak
    // ... thawa 32k methana danna
];

test.describe('Swift Translator Automation', () => {

    for (const tc of testCases) {
        test(`Test Case ${tc.id}: ${tc.input}`, async ({ page }) => {
            // 1. Site ekata yanna
            await page.goto('https://www.swifttranslator.com/');

            // 2. Input box eka hoyala Singlish type karanna
            // Note: Website eke input box eke ID eka 'input' nam:
            await page.fill('#input', tc.input);

            // 3. Output eka update wenna podi welawak denna
            await page.waitForTimeout(1000); 

            // 4. Sinhala output box eken text eka ganna
            // Note: Output box eke ID eka 'output' nam:
            const actualOutput = await page.innerText('#output');

            console.log(`ID: ${tc.id} | Actual: ${actualOutput}`);

            // 5. Result eka check karanna (Pass/Fail)
            // Meeka 'Neg' ekak nam api fail wei kiyala expect karanawane
            if (tc.id.startsWith('Pos_Fun')) {
                expect(actualOutput).toBe(tc.expected);
            }
        });
    }
    // --- UI Test Scenario (Pos_UI_0002) ---
test('Pos_UI_0002: Clearing input should clear the output box', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputSelector = '#input';  // Site eke input box eke ID eka
    const outputSelector = '#output'; // Site eke output box eke ID eka

    // 1. Wachanayak type karanna
    await page.fill(inputSelector, 'mama yanawa');
    await page.waitForTimeout(1000); // Update wenna podi welawak danna

    // 2. Output eka empty nathi bava check karanna
    const outputBefore = await page.innerText(outputSelector);
    expect(outputBefore.length).toBeGreaterThan(0);

    // 3. Input eka clear karanna (Backspace gahana eka simulate karanna)
    // Leseema krama thama fill ekata empty string ekak dena eka
    await page.fill(inputSelector, ''); 
    
    // Thawa kramayak thama Ctrl+A gahala Backspace gahana eka
    // await page.click(inputSelector);
    // await page.keyboard.press('Control+A');
    // await page.keyboard.press('Backspace');

    await page.waitForTimeout(1000);

    // 4. Output ekath empty welaada balanna
    const outputAfter = await page.innerText(outputSelector);
    expect(outputAfter.trim()).toBe(''); 
});
});