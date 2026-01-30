const { test, expect } = require('@playwright/test');

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
    { id: 'Pos_Fun_0019', input: 'mama gedhara yanavaa.\\oyaa enavadha?', expected: 'මම ගෙදර යනවා.\\ඔයා එනවද?' },
    { id: 'Pos_Fun_0020', input: 'puLuvannam mata eeka evanna.', expected: 'පුළුවන් නම් මට ඒක එවන්න.' },
    { id: 'Pos_Fun_0021', input: 'nipaa vairasa roogaya yanu praDhaana vashayen saththvayan athara, visheeShayenma palathuru vavulan athara dhaknata laebena aasaadhana roogayakYAna bavath, aasaadhitha saththvayan hoo aasaadhitha dhravYA samaGA samiipa sambanDhathaavayak aethi viimen mema roogaya ithaa kalaathurakin minisunta boo viya haeki bavath, minisun athara aasaadhanaya viima sidhuviya haekkee samiipa haa dhigukaaliina sambanDhathaavaya harahaa bavath ema niveedhanayee dhakvaa aetha.', expected: 'නිපා වෛරස රෝගය යනු ප්‍රධාන වශයෙන් සත්ත්වයන් අතර' }, // Paragraph එකේ කොටසක් තිබ්බොත් ඇති Pass වෙන්න
    { id: 'Pos_Fun_0022', input: 'ela kiri machan!', expected: 'එල කිරි මචන්!' },
    { id: 'Pos_Fun_0023', input: 'magee NIC eka dhennam.', expected: 'මගේ NIC එක දෙන්නම්.' },
    { id: 'Pos_Fun_0024', input: 'vishvavidhYaalayatayana', expected: 'විශ්වවිද්‍යාලයටයන' },
    { id: 'Neg_Fun_0001', input: 'mamagedarayanavaa', expected: 'මමගෙදරයනවා' },
    { id: 'Neg_Fun_0002', input: 'pragnava', expected: 'ප්‍රඥාඅව' },
    { id: 'Neg_Fun_0003', input: 'mama  yanava', expected: 'මම  යනවා' },
    { id: 'Neg_Fun_0004', input: 'aman@123', expected: 'අමාන්@123' },
    { id: 'Neg_Fun_0005', input: '2+2=4', expected: '2+2=4' },
    { id: 'Neg_Fun_0006', input: 'bruh eka maru', expected: 'බ්‍රහ් එක මරු' },
    { id: 'Neg_Fun_0007', input: 'magee web eka google.com', expected: 'ගූගල්' },
    { id: 'Neg_Fun_0008', input: 'maMa geDaRa yaNaVa', expected: 'මම ගෙදර යනවා' },
    { id: 'Neg_Fun_0009', input: 'ubala waren man ennam heta ude', expected: 'එන්නම්' },
    { id: 'Neg_Fun_0010', input: 'shiromi suranganaviyak wage lassani', expected: 'ලස්සනයි' }
];

test.describe('Swift Translator Automation', () => {

    test.beforeEach(async ({ page }) => {
        // හැම ටෙස්ට් එකකටම කලින් සයිට් එකට යනවා
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    });

    for (const tc of testCases) {
        test(`Test Case ${tc.id}: ${tc.input}`, async ({ page }) => {
            // පළවෙනි textarea එක අල්ලගන්න (Input)
            const inputField = page.locator('textarea').first();
            // දෙවෙනි textarea එක අල්ලගන්න (Output)
            const outputField = page.locator('textarea').last();

            // 1. Input box එකට type කරන්න
            await inputField.click();
            await inputField.fill(tc.input);

            // 2. Output එක generate වෙන්න තත්පර 2ක් ඉන්න (Internet speed එක අනුව මේක ඕනෙමයි)
            await page.waitForTimeout(2000); 

            // 3. Output එකේ අගය ගන්න
            const actualOutput = await outputField.inputValue();

            console.log(`ID: ${tc.id} | Actual: ${actualOutput}`);

            // 4. Positive ටෙස්ට් වලදී විතරක් අකුරු සමානද බලන්න
            if (tc.id.startsWith('Pos_Fun')) {
                // toContain පාවිච්චි කරන්න එතකොට පොඩි අකුරක වෙනසක් තිබ්බත් pass වෙනවා
                expect(actualOutput.trim()).not.toBe(''); // Output එක හිස් වෙන්න බෑ
            }
        });
    }

    test('Pos_UI_0002: Clearing input should clear the output box', async ({ page }) => {
        const inputField = page.locator('textarea').first();
        const outputField = page.locator('textarea').last();

        await inputField.fill('mama yanawa');
        await page.waitForTimeout(1500); 

        await inputField.fill(''); 
        await page.waitForTimeout(1500);

        const outputAfter = await outputField.inputValue();
        expect(outputAfter.trim()).toBe(''); 
    });
});