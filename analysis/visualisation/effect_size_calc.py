"""
calculate effect size from params
"""
import numpy as np


#generalise
param_dict_hc = {
    'sigma_a': 0.45,  # generalisation param for shock
    'sigma_n': 0.06,  # generalisation param for no shock
    'eta':    0.17,     # p_h dynamic learning rate
    'kappa':  0.75,    # p_h dynamic learning rate
    'beta': 9.5,       # softmean beta
    'bias': 0.3      # softmean bias
}
# hc sd
sd_dict_hc = {
    'sigma_a': 0.05,  # generalisation param for shock
    'sigma_n': 0.01,  # generalisation param for no shock
    'eta':    0.1,     # p_h dynamic learning rate
    'kappa':  0.2,    # p_h dynamic learning rate
    'beta': 2,       # softmean beta
    'bias': 0.1      # softmean bias
}
# patient params
param_dict_pt = {
    'sigma_a': 0.85,  # generalisation param for shock
    'sigma_n': 0.03,  # generalisation param for no shock
    'eta':    0.18,     # p_h dynamic learning rate
    'kappa':  0.76,    # p_h dynamic learning rate
    'beta': 4.3,       # softmean beta
    'bias': 0.3      # softmean bias
}
# patient sd
sd_dict_pt = {
    'sigma_a': 0.05,  # generalisation param for shock
    'sigma_n': 0.01,  # generalisation param for no shock
    'eta':    0.10,     # p_h dynamic learning rate
    'kappa':  0.2,    # p_h dynamic learning rate
    'beta': 2,       # softmean beta
    'bias': 0.1      # softmean bias
}

eff_gen_sigma = (param_dict_hc['sigma_a']-param_dict_pt['sigma_a'])/np.mean([sd_dict_hc['sigma_a'], sd_dict_pt['sigma_a']])
eff_gen_beta = (param_dict_hc['beta']-param_dict_pt['beta'])/np.mean([sd_dict_hc['beta'], sd_dict_pt['beta']])

print(f'gen sigma a effect={eff_gen_sigma:.3f}')
print(f'gen beta effect={eff_gen_beta:.3f}')
