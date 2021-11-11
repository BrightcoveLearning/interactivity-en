/*globals define*/
define(
    {
        annotation: {
            quiz: {
                actions: {
                    thanks: 'Teşekkürler',
                    link: 'URL Yükle',
                    time: 'Video zamanına git',
                    track: 'Video ID Yükle'
                },
                button: {
                    cancel: 'İptal',
                    back: 'Geri',
                    next: 'İleri',
                    done: 'Tamam',
                    submit: 'Onayla',
                    save: 'Kaydet',
                    new_choice: 'Seçenek',
                    new_input: 'Metin İçeriği',
                    previous_page: 'Önceki',
                    next_page: 'Sonraki',
                    show_answer: 'Cevabı Göster',
                    retry: 'Tekrar Dene'
                },
                menu: {
                    new_item: {
                        menu_label: 'Ekle',
                        new_question: 'Soru',
                        new_page: 'Sayfa'
                    },
                    set_option: {
                        menu_label: 'Seçenekler',
                        cancel: 'İptali etkisizleştir',
                        passFail: 'Geçme/Kalma seçenekleri',
                        submit: 'Onaylama seçeneğini düzenle'
                    }
                },
                text: {
                    label: {
                        answer: 'Doğru cevap',
                        page: 'Sayfa',
                        of: '/',
                        out_of: '/',
                        correct: 'Doğru',
                        incorrect: 'Yanlış'
                    },
                    placeholder: {
                        new_question: 'Soruyu Girin',
                        new_choice: 'Cevabı Girin',
                        new_input: 'Doğru Cevap Metnini Girin'
                    },
                    title: {
                        thanks: 'Teşekkür Metni Girin'
                    },
                    warning: {
                        delete_page: 'Bu sayfayı silmek istediğinize emin misiniz?'
                    }
                },
                dialog: {
                    passFail: {
                        actions: {
                            link: 'URL Yükle',
                            threshold: 'Özel geçme/kalma sınırı belirleyin',
                            time: 'Video zamanına git',
                            track: 'Video ID Yükle',
                            passingMark: 'Geçme skoru',
                            reset: 'Soruları sıfırla',
                            pause: 'Tıklanınca videoyu durdur'
                        },
                        tabs: {
                            fail: 'Kalma',
                            pass: 'Geçme'
                        },
                        title: 'Geçme/kalma seçenekleri'
                    },
                    onSubmit: {
                        actions: {
                            retry: 'Tekrar denemeye izin ver',
                            show_answer: 'İzleyicinin doğru cevabı/cevapları görmesine izin ver',
                            thanks: 'Mesaj',
                            review: 'Önizleme ekranını göster'
                        },
                        title: 'Seçenekleri Onayla'
                    }
                }
            }
        },
        overlay: {
            common: {
                button: {
                    cancel: 'İptal',
                    ok: 'Tamam',
                    submit: 'Onayla'
                }
            },
            action: {
                chapter_text: {
                    title: 'Metin'
                },
                comment_text: {
                    title: 'Metin'
                },
                delete_annotation: {
                    title: 'Ek Açıklama/Yönlendirme yi sil',
                    message: 'Bu Ek Açıklama/Yönlendirme yi silmek istediğinize emin misiniz?'
                },
                set_duration: {
                    title: 'Süreyi Belirle',
                    text: {
                        label: {
                            maxDuration: 'Videonun sonuna kadar aktif kal',
                            hours: 'Saat',
                            minutes: 'Dakika',
                            seconds: 'Saniye'
                        }
                    }
                }
            }
        }
    }
);
