const qs = require('qs');

const populateQuery = {
    locale: 'vi',
    populate: {
        tiktok_hero: {
            populate: {
                image: { fields: ['url', 'alternativeText', 'formats', 'name'] }
            }
        },
        tiktok_why_us: {
            populate: {
                points: { populate: '*' },
                image: { fields: ['url', 'alternativeText', 'formats', 'name'] }
            }
        }
    }
};

const queryString = qs.stringify(populateQuery, { encodeValuesOnly: true });

fetch(`http://localhost:1888/api/tiktok-ad?${queryString}`, {
    headers: {
        Authorization: 'Bearer 5f0bfe0f76c1cdb98dc477a56343a443a23ca85d8ee421439fe7409866feaba7147affe0889aad75c2953a9a7224af4b34ebc96aa285a5c53702dbe2f7ab3e6bdeda5f474b66bbd85bde47b445d48d221eb11bd6e1f66af4cf6cdb2157ee0e2e5913a6ee4fdeebe5d4889cc971b6b837c48e4fe7e99d4eaacdca0f25f946f20d'
    }
}).then(r => r.json()).then(d => {
    console.log("HERO:", JSON.stringify(d.data.tiktok_hero, null, 2));
    console.log("WHY US:", JSON.stringify(d.data.tiktok_why_us, null, 2));
});
